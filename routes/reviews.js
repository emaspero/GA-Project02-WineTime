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

const reviewCtrl = require('../controllers/review');

router.get('/review/add', isLoggedIn, reviewCtrl.review_create_get);
router.post('/review/add', reviewCtrl.review_create_post);
router.get('/review/index', reviewCtrl.review_index_get);
router.get('/review/detail', reviewCtrl.review_show_get);
router.get('/review/delete', reviewCtrl.review_delete_get);
router.get('/review/edit', reviewCtrl.review_edit_get);
router.put('/review/update', reviewCtrl.review_update_put);

module.exports = router;
