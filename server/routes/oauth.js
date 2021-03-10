const express = require('express');
const path = require('path');
const router = express.Router();
// const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID, // Add your clientID
  clientSecret: process.env.CLIENT_SECRET, // Add the secret here
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // need logic here to save user into a MongoDB
  done(null, profile, accessToken);
}));

// Googe Oauth2
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Google Oauth2 callback url
router.get('/auth/google/callback', passport.authenticate('google', {
  scope: ['profile', 'email'],
}), (req, res, next) => {
  console.log('res.locals:+=============', res.locals);
  console.log('req: ++++++++', req.body)
  console.log('I made it to the end of the middleware chain');
  return next();
});

module.exports = router;
