const Room = require("../models/roomSchema");

// index route (display all rooms)
module.exports.index = async (req, res) => {
  let allRooms = await Room.find();
  res.render("rooms/index.ejs", { allRooms });
};

// new route (render form)
module.exports.renderNewForm = (req, res) => {
  res.render("rooms/new.ejs");
};

// create route (add new room )
module.exports.createRoom = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  let newRoom = new Room(req.body.Room);
  newRoom.owner = req.user._id;

  newRoom.image = { url, filename };

  // console.log(await newRoom);
  await newRoom.save();
  req.flash("success", "New room created Successfully!");
  res.redirect("/rooms");
};

// show route ( view room in detail )
module.exports.showRoom = async (req, res) => {
  let { id } = req.params;
  let room = await Room.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!room) {
    req.flash("failure", "Room is not exist");
    res.redirect("/rooms");
  }
  res.render("rooms/show.ejs", { room });
};

// edit route ( render edit form )
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let room = await Room.findById(id);
  if (!room) {
    req.flash("failure", "Room is not exist");
    res.redirect("/rooms");
  }

  let originalImageUrl = room.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_300");
  res.render("rooms/edit.ejs", { room, originalImageUrl });
};

// update route
module.exports.updateRoom = async (req, res) => {
  let { id } = req.params;
  let room = await Room.findByIdAndUpdate(id, { ...req.body.Room });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    room.image = { url, filename };
    room.save();
  }

  req.flash("success", "Room updated Successfully");
  res.redirect(`/rooms/${id}`);
};

//destroy route
module.exports.destroyRoom = async (req, res) => {
  let { id } = req.params;
  await Room.findByIdAndDelete(id);
  req.flash("success", "Room deleted Successfully");
  res.redirect("/rooms");
};
