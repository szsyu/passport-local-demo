var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login', {
      title: 'Login',
      message: req.flash('loginMessage')
    });
  })
  .post('/', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

module.exports = router;