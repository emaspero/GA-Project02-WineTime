//  APIs for user registration and authentication

// Import User model
const User = require('../models/User');

// Import bcrypt
const bcrypt = require('bcrypt');
const salt = 10;

// Import passport via ppConfig file
const passport = require('../helper/ppConfig');

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