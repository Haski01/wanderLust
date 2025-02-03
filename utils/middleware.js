const Room = require("../models/roomSchema");
const Review = require("../models/reviewSchema");
const { roomValidation, reviewValidation } = require("./validateSchema.js");
const ExpressError = require("./ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("failure", "You must be login first!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let room = await Room.findById(id);
  if (!room.owner.equals(res.locals.currUser._id)) {
    req.flash("failure", "You are not the Owner!");
    return res.redirect(`/rooms/${id}`);
  }
  next();
};

module.exports.isReviewAuther = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("failure", "You are not the Owner!");
    return res.redirect(`/rooms/${id}`);
  }
  next();
};

module.exports.validateRoom = (req, res, next) => {
  let { error } = roomValidation.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewValidation.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
