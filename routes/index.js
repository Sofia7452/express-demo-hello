var express = require('express');
var router = express.Router();

/* GET home page. */
/* 路由为/加载views的index.js */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
