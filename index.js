if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const port = process.env.PORT;

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");

const dbUrl = process.env.ATLASDB_URL;
const MongoStore = require("connect-mongo");

const flash = require("connect-flash");
const User = require("./models/userSchema.js");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const roomRoute = require("./routes/room.js");
const reviewRoute = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "/views");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("err", () => {
  console.log("ERROR in MONGO SESSION", err);
});

const sessionOpton = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expire: Date.now() + 7 * 24 * 60 * 60,
    maxAge: 7 * 24 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionOpton));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.failure = req.flash("failure");
  res.locals.currUser = req.user;
  next();
});

app.use("/rooms", roomRoute);
app.use("/rooms/:id/reviews", reviewRoute);
app.use("/", userRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "-----PAGE NOT FOUND-----"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Somethig went wrong" } = err;
  res.status(status).render("rooms/error.ejs", { err });
});

app.listen(port, () => {
  console.log("listening at port no: 8080");
});
