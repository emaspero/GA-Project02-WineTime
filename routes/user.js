// Require express
const express = require('express');

// Import method override
const methodOverride = require('method-override');

// Import router
const router = express.Router();

// Initialise router
router.use(methodOverride('_method'));

// Body parser
router.use(express.urlencoded({extended: true}));

const userCtrl = require('../controllers/user');

router.get('/user/detail', userCtrl.user_show_get);

module.exports = router;