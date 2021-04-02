const express           = require('express');
const router            = express.Router();
const liverpoolsCtrl    = require('../controllers/liverpools');
const isLoggedIn        = require('../config/auth');


/* GET users listing. */
router.get('/', liverpoolsCtrl.index);
router.get('/favorite', isLoggedIn, liverpoolsCtrl.favorite);
router.get('/matchdates', liverpoolsCtrl.matchdates);
router.delete('/:id', liverpoolsCtrl.delete);
router.get('/:id', liverpoolsCtrl.show);
router.post('/:id/favorite', liverpoolsCtrl.create);


module.exports = router;
