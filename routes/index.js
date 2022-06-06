// Require express
const express = require('express');

// Initialise the router
const router = express.Router();

// Create controller 
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index_get);



module.exports = router;