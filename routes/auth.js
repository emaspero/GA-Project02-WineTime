// Import express
const express = require('express');

// Initialise router
const router = express.Router();

const { route } = require('.');

// Create controller
const authCtrl = require('../controllers/auth');

router.get('/auth/signup', authCtrl.auth_signup_get);


module.exports = router;

