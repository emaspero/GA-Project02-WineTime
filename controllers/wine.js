// Import Wine from model
const {Wine} = require('../models/Wine');

// Require Moment and isLoggedIn below
const moment = require('moment');

// GET - Load 'Add Wine' form
exports.wine_create_get = (req, res) => {
    res.render('wine/add');
};
// POST - Save the data into the database
exports.wine_create_post = (req, res) => {
    console.log(req.body);

    let wine = new Wine(req.body);

    wine.save()
    .then(() => {
        res.redirect('/wine/index');
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later");
    })
};

// GET - Wine Index
exports.wine_index_get = (req, res) => {
    Wine.find()
    .then(wines => {
        res.render('wine/index', {wines, moment})
    })
    .catch((err) => {
        console.log(err);
    })
}

// GET - Wine detail page by ID
exports.wine_show_get = (req, res) => {
    console.log(req.query.id);

    Wine.findById(req.query.id).populate('review')
    .then(wine => {
        res.render('wine/detail', {wine, moment});
    })
    .catch((err) => {
        console.log(err);
    })
};