// Require express, method-override, router and isLoggedIn
const express = require('express');

var methodOverride = require('method-override');
const router = express.Router();
// Require isLoggedIn 
const isLoggedIn = require('../helper/isLoggedIn');

// Initialize method-override
router.use(methodOverride('_method'));
// Body parser
router.use(express.urlencoded({extended: true}));

const wineCtrl = require('../controllers/wine');

router.get('/wine/add', isLoggedIn, wineCtrl.wine_create_get);
router.post('/wine/add', wineCtrl.wine_create_post);
router.get('/wine/index', wineCtrl.wine_index_get);
router.get('/wine/detail', wineCtrl.wine_show_get);
router.get('/wine/delete', wineCtrl.wine_delete_get);
router.get('/wine/edit', wineCtrl.wine_edit_get);
router.put('/wine/update', wineCtrl.wine_update_put);

module.exports = router;
