const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comment: String,
    rating: {
        type: Number,
        min: [1, "Rating must be between 1 and 5"],
        max: [5, "Rating must be between 1 and 5"],
        validate: {
            validator: Number.isInteger
        }
    },
    wine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wine'
    }]},
    {
        timestamps: true
    });

    const Review = mongoose.model('Review', reviewSchema);

    module.exports = {Review};

