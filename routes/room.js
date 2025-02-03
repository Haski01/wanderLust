const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateRoom } = require("../utils/middleware.js");
const roomController = require("../controllers/room.js");
const multer = require("multer");

const storage = require("../cloudConfig.js");
const upload = multer(storage);

router
  .route("/")
  .get(wrapAsync(roomController.index))
  .post(
    isLoggedIn,
    upload.single("Room[image]"),
    validateRoom,
    wrapAsync(roomController.createRoom)
  );

router.get("/new", isLoggedIn, roomController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(roomController.showRoom))
  .patch(
    isLoggedIn,
    isOwner,
    upload.single("Room[image]"),
    validateRoom,
    wrapAsync(roomController.updateRoom)
  );

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(roomController.renderEditForm)
);

router.delete(
  "/:id/delete",
  isLoggedIn,
  isOwner,
  wrapAsync(roomController.destroyRoom)
);

module.exports = router;
