// Import passport
const passport = require('passport');

// Import local passport strategy
const LocalStrategy = require('passport-local').Strategy;

// Import User
const {User} = require('../models/User');

// Serialise user using passport 
passport.serializeUser(function(user, done) {
    done(null, user.id)
});

// Deserialise user so that you can take user information from the session
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
});

// Initialise local strategy with passport
passport.use(new LocalStrategy(
    {
        usernameField: "emailAddress",
        passwordField: "password"
    },
    function(emailAddress, password, done) {
        User.findOne({ emailAddress: emailAddress}, function(err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user)
        });
    }
));

module.exports = passport;