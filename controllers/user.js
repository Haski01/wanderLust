const User = require("../models/userSchema");

// render signup form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// registering new user
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({ username, email });
    let registerdUser = await User.register(newUser, password);
    req.login(registerdUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderlust");
      res.redirect("/rooms");
    });
  } catch (e) {
    req.flash("failure", e.message);
    res.redirect("/signup");
  }
};

// render login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// login user
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/rooms";
  res.redirect(redirectUrl);
};

// logout user
module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged you out!");
    res.redirect("/rooms");
  });
};
