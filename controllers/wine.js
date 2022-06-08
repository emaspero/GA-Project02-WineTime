// Import Wine from model
const {Wine} = require('../models/Wine');

// Require Moment and isLoggedIn below
const moment = require('moment');

// GET - Load 'Add Wine' form
exports.wine_create_get = (req, res) => {
    res.render('wine/add');
    console.log(req.body);

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

    Wine.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'user',
          model: 'User'
        } 
     })
    .then(wine => {
        res.render('wine/detail', {wine, moment});
    })
    .catch((err) => {
        console.log(err);
    })
};

// GET - Delete
exports.wine_delete_get = (req, res) => {
    console.log(req.query.id);
    
    Wine.findByIdAndDelete(req,query.id)
    .then(() => {
        res.redirect('/wine/index');
    })
    .catch((err) => {
        console.log(err);
    })
};

// GET - Load Wine edit form
exports.wine_edit_get = (req, res) => {
    Wine.findById(req.query.id)
    .then((wine) => {
        res.render('wine/edit', {wine})
        console.log(req.body.id);
        console.log(req.body);
    })
    .catch((err) => {
        console.log(err);
    })
};
// PUT - Wine update
exports.wine_update_put = (req, res) => {
    console.log(req.body.id);

    Wine.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect('/wine/index');
    })
    .catch((err) => {
        console.log(err);
    })
};