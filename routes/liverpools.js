const express           = require('express');
const router            = express.Router();
const liverpoolsCtrl    = require('../controllers/liverpools');
const isLoggedIn        = require('../config/auth');


/* GET users listing. */
router.get('/', liverpoolsCtrl.index);
router.get('/:id', liverpoolsCtrl.show);
router.post('/', liverpoolsCtrl.create);


module.exports = router;
