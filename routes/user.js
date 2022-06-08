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
router.get('/user/profile', userCtrl.profile_show_get);
router.get('/user/edit', userCtrl.profile_edit_get);
router.put('/user/update', userCtrl.profile_update_put);
router.get('/user/editPassword', userCtrl.password_edit_get);
router.put('/user/updatePassword', userCtrl.password_update_put);

module.exports = router;