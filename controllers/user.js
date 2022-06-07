//  APIs for user profile

// Import User
const {User} = require('../models/User.js');

// Import Review
const {Review} = require('../models/Review');

// Import Wine 
const {Wine} = require('../models/Wine');

// Require moment
const moment = require('moment');

// Use HTTP GET to show user profile page
exports.user_show_get = (req, res) => {
    User.findById(req.query.id).populate('review')
    .then((user) => {
        res.render('user/detail', {user, moment});
    })
    .catch((err) => {
        console.log(err);
    })
};