const Room = require("../models/roomSchema");
const Review = require("../models/reviewSchema");

// REVIEWS
// post review route ( new review created)
module.exports.createReview = async (req, res) => {
  let room = await Room.findById(req.params.id);
  let newReview = new Review(req.body.review);

  newReview.author = req.user._id;
  room.reviews.push(newReview);

  await newReview.save();
  await room.save();
  req.flash("success", "New Review created");
  res.redirect(`/rooms/${room._id}`);
};

// delete review route
module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Room.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted");
  res.redirect(`/rooms/${id}`);
};
