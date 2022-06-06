const mongoose = require('mongoose');

//author id in article collection = wine id in review collection

const wineSchema = mongoose.Schema({
    name: String,
    grape: String,
    region: String,
    country: String,
    rating: Number
},
{
    timestamps: true
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = {Wine};