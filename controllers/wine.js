// Import Wine from model
const {Wine} = require('../models/Wine');

// Require Moment and isLoggedIn below

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