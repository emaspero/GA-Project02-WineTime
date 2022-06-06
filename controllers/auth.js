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