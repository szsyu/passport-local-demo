var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('signup', {
      title: 'Sign Up',
      message: req.flash('signupMessage')
    });
  })
  .post('/', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

module.exports = router;