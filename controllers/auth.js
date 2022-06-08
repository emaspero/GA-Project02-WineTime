//  APIs for user registration and authentication

// Import User model
const {User} = require('../models/User');

// Import bcrypt
const bcrypt = require('bcrypt');
const salt = 10;

// Import passport via ppConfig file
const passport = require('../helper/ppConfig');

// Sign Up
// Use HTTP GET to load the sign up form 
exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}

// Use HTTP POST to add user to database 
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    user.password = hashedPassword;
    user.save()
    .then( () => {
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
        res.send("Error signing up. Please try again later.")
    })
}

// Sign In
// Create sign in page using HTTP GET to load the sign in form
exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");
}

// Use HTTP POST to authenticate data for sign in 
// Request and response function not required because using passport
exports.auth_signin_post =
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/auth/signin",
        failureFlash: "Invalid username or password. Please try again.",
        successFlash: "Log in successful!"
    });

// Log Out 
// Usee HTTP GET to log user out
exports.auth_logout_get = (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
    })
    // req.logout(); // for older version of passport
    req.flash("success", "You have successfully logged out!");
    res.redirect("/auth/signin");
}

