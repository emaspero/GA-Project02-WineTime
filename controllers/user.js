//  APIs for user profile

// Import User
const {User} = require('../models/User.js');

// Import Review
const {Review} = require('../models/Review');

// Import Wine 
const {Wine} = require('../models/Wine');

// Require moment
const moment = require('moment');

// Use HTTP GET to show user public profile page
exports.user_show_get = (req, res) => {
    User.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'wine',
          model: 'Wine'
        } 
     })
    .then((user) => {
        res.render('user/detail', {user, moment});
    })
    .catch((err) => {
        console.log(err);
    })
};

// GET - show current user private profile info
exports.profile_show_get = (req, res) => {
    User.find(req.user).populate('review') //.find always returns an array or findbyid(req.user._id)
    .then((user) => {
        console.log(req.user)
        console.log(user)
        res.render('user/profile', {user, moment});
        
    })
    .catch((err) => {
        console.log(err);
    })
}