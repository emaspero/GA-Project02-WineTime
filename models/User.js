//  Require mongoose
const mongoose = require('mongoose');

// Require bcrypt for password encryption
const bcrypt = require('bcrypt');

// Create user schema
const userSchema = mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
        minlength: [2, "At least 2 characters required for first name."],
        maxlength: [99, "First name is too long, please try again."]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, "At least 2 characters required for last name."],
        maxlength: [99, "Last name is too long, please try again."]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Invalid password. Must be at least 8 characters."]
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
},
{
    timestamps: true
});

// verify password using bcrypt
userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
};

const User = mongoose.model("User", userSchema);

module.exports = {User};