// Require express, method-override, router and isLoggedIn
const express = require('express');

var methodOverride = require('method-override');
const router = express.Router();
// Require isLoggedIn here

// Initialize method-override
router.use(methodOverride('_method'));
// Body parser
router.use(express.urlencoded({extended: true}));

const wineCtrl = require('../controllers/wine');

router.get('/wine/add', wineCtrl.wine_create_get);
router.post('/wine/add', wineCtrl.wine_create_post);

module.exports = router;
