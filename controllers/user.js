//  APIs for user profile

// Import User
const {User} = require('../models/User.js');

// Import Review
const {Review} = require('../models/Review');

// Import Wine 
const {Wine} = require('../models/Wine');

// Require moment
const moment = require('moment');
// Require bcrypt
const bcrypt = require('bcrypt');
const salt = 10;

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
    User.find(req.user).populate({ 
        path: 'review',
        populate: {
          path: 'wine',
          model: 'Wine'
        } 
     })
      //.find always returns an array or findbyid(req.user._id)
    .then((user) => {
        console.log(req.user)
        console.log(user)
        res.render('user/profile', {user, moment});
        
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP GET to load the edit form
exports.profile_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((profile) => {
        res.render('user/edit', {profile})
    })
    .catch((err) => {
        console.log(err)
    })
}

// HTTP PUT to update profile
exports.profile_update_put = (req, res) => {
    console.log(req.body.id)
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect('/user/profile')
    })
    .catch((err) => {
        console.log(err)
    })
}

// HTTP GET to load the change password page
exports.password_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((password) => {
        res.render('user/editPassword', {password})
    })
    .catch((err) => {
        console.log(err)
    })
}

// HTTP PUT to compare current passwords and update with new password 
exports.password_update_put = (req, res) => {
    // console.log(req.user)
    let user = req.user  
    // console.log(user.password)
    // console.log(req.body.password)
    let dbPassword = user.password 
    let enteredPassword = req.body.password
    // const comparePassword = (pw, hash) => {
        var comp = bcrypt.compareSync(enteredPassword, dbPassword)
        // console.log(comp)
        if (comp) {
            let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
            req.body.password = hashedPassword
            console.log(req.body.id)
            User.findByIdAndUpdate(req.body.id, req.body)
            // req.body.password.save()
            .then(() => {
                console.log(`after then ${req.body.password}`)
                res.redirect('/user/profile');
            })
            .catch((err) => {
                console.log(err)
            })
        }
    // }
// //    comparePassword(dbPassword, enteredPassword)
}