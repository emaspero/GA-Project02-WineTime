const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comment: String,
    rating: Number,
    wine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wine'
    }]},
    {
        timestamps: true
    });

    const Review = mongoose.model('Review', reviewSchema);

    module.exports = {Review};

