const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("./reviewSchema.js");
const { types } = require("joi");
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(console.log("connection successfull with mongodb"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const roomSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  location: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

roomSchema.post("findOneAndDelete", async (room) => {
  if (room) {
    await Review.deleteMany({ _id: { $in: room.reviews } });
  }
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
