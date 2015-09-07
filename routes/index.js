var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HTML5 Canvas 2D Basics Tutorial' });
});

module.exports = router;
