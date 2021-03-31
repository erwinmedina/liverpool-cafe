const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");
const isLoggedIn = require('../config/auth');

router.post("/liverpools/:id/comments", isLoggedIn, commentsCtrl.create);
router.put('/comments/:id', commentsCtrl.update);
router.delete("/comments/:id", isLoggedIn, commentsCtrl.delete);


module.exports = router;