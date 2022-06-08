// Import Review & Wine from model
const {Review} = require('../models/Review');
const {Wine} = require('../models/Wine');
const {User} = require('../models/User');

// Require Moment and isLoggedIn below
const moment = require('moment');

// GET - Load 'Add Review' form
exports.review_create_get = (req, res) => {
    Wine.find()
    .then((wines => {
    res.render('review/add', {wines})
    }))
    .catch((err) => {
        console.log(err);
        res.send("Try again later");
    })
    console.log(req.body);

};
// POST - Save the data into the database
exports.review_create_post = (req, res) => {
    let review = new Review(req.body);
    let user = User(req.user);
    console.log(req.user)
    console.log(review)
    review.save()
    .then((new_review) => {
        // req.body.wine.forEach(wine => {
            Wine.findById(req.body.wine, (error, wine) => {
                wine.review.push(review);
                new_review.user.push(req.user);
                user.review.push(review);

                // new_review.save()
                // .then()
                // .catch()
                // wine.save()
                // user.save()

                new_review.save()
                .then(() => {
                    wine.save()
                    .then(() => {
                        user.save()
                        .then()
                        .catch()
                    })
                    .catch()
                })
                .catch()

            })
        // })
        res.redirect('/review/index');
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later");
    })
};

// GET - Review Index
exports.review_index_get = (req, res) => {
    Review.find().populate(['user', 'wine'])
    .then(reviews => {
        res.render('review/index', {reviews, moment})
    })
    .catch((err) => {
        console.log(err);
    })
}

// GET - Review detail page by ID
exports.review_show_get = (req, res) => {
    console.log(req.query.id);

    Review.findById(req.query.id).populate('wine')
    .then(review => {
        res.render('review/detail', {review, moment});
    })
    .catch((err) => {
        console.log(err);
    })
};

// GET - Delete
exports.review_delete_get = (req, res) => {
    console.log(req.query.id);
    
    Review.findByIdAndDelete(req,query.id)
    .then(() => {
        res.redirect('/review/index');
    })
    .catch((err) => {
        console.log(err);
    })
};

// GET - Load Review edit form
exports.review_edit_get = (req, res) => {
    Review.findById(req.query.id)
    .then((review) => {
        res.render('review/edit', {review})
    })
    .catch((err) => {
        console.log(err);
    })
};
// PUT - Review update
exports.review_update_put = (req, res) => {
    console.log(req.body.id);

    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect('/user/profile');
    })
    .catch((err) => {
        console.log(err);
    })
};