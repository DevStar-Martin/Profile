var express = require('express');
var router = express.Router();

// Require controller modules.
var profile_router = require('../controllers/profileController');

// GET catalog home page.
router.get('/', profile_router.index);

module.exports = router;