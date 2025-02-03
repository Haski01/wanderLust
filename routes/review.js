const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const {
  isLoggedIn,
  isReviewAuther,
  validateReview,
} = require("../utils/middleware.js");

const reviewController = require("../controllers/review.js");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuther,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
