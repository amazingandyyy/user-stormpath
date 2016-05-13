var express = require('express');
var router = express.Router();

/* GET home page. */

var stormpath = require('express-stormpath');

router.get('/', stormpath.getUser, function(req, res, next) {
  console.log('req.user:', req.user);
  res.render('index', { title: 'Express' });
});
router.get('/', stormpath.getUser, function(req, res, next) {
  console.log('req.user:', req.user);
  res.render('index', { title: 'Express' });
});

module.exports = router;
