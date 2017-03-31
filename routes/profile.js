var express = require('express');
var gravatar = require('gravatar');
var router = express.Router();

// Authentication middleware for profile page.
function logStatus(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/login');
  }
}

router.get('/', logStatus, function(req, res, next) {
  res.render('profile', {
    title: 'Profile',
    user: req.user,
    avatar: gravatar.url(req.user.email, {
      s: 100,
      r: 'g',
      d: 'retro'
    }, true)
  });
});

module.exports = router;