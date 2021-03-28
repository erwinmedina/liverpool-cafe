const express           = require('express');
const router            = express.Router();
const liverpoolsCtrl    = require('../controllers/liverpools');
const isLoggedIn        = require('../config/auth');
const data              = require("../data");


/* GET users listing. */
router.get('/', liverpoolsCtrl.index);
router.get('/:id', liverpoolsCtrl.show);


module.exports = router;
