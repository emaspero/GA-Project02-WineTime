const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
    name: String,
    grape: String,
    region: String,
    country: String,
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
},
{
    timestamps: true
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = {Wine};