// Require express
const express = require('express');

// Require mongoose 
const mongoose = require('mongoose');

// Require .env configurations
require('dotenv').config();

// Require express ejs layouts
const expressLayouts = require('express-ejs-layouts');

// Require flash
const flash = require('connect-flash');

// Initialise express
const app = express();

// Link static files
app.use(express.static("public"));

// Look in views folder for file name layout.ejs
app.use(expressLayouts);

// Port configurations
const PORT = process.env.PORT;

// Require express session
let session = require('express-session');

// Require passport
let passport = require('./helper/ppConfig');

// Session configurations
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 3600000}
}))

// Initialise session and passport
// app.use(passport.initialize());
// app.use(passport.session());

// Initalise flash to display messages to the user
app.use(flash());

// Sharing the info with all pages
app.use(function(req, res, next){
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
});

// Importing routes
const indexRouter = require('./routes/index');

const authRouter = require('./routes/auth');

// Mounting routes
app.use('/', indexRouter);

app.use('/', authRouter);

// Listen to port with callback fxn
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// node.js to look in views for all ejs files
app.set("view engine", "ejs");

// mongoDB connection and create database
mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true
    },
    () => {console.log("mongoDB connected")}
    );
