const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');
const passport = require('passport');
require('dotenv').config()
// const loginRouter = require('./routes/loginRoute');

const app = express();
const router = express.Router();

//express passport for google Oauth
app.use(passport.initialize());

const oauthRouter = require('./routes/oauth');
/**
 * handle parsing request body
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// flow check
// comment out cookie parser when using postman
app.use((req, res, next) => {
  console.log(`
  🍒🍒🍒 FLOW METHOD 🍒🍒🍒
  URL: ${req.url}\n
  METHOD: ${req.method}\n
  BODY: ${req.body}\n
  PARAMS: ${req.params}\n`);
  return next();
});

/**
 * serve the bundle file
 */
app.use('/build', express.static(path.resolve(__dirname, '../build/')));

/**
 * handle requests for static files
 */
 app.use('/', express.static(path.resolve(__dirname, '../client/')));
 
// app.use('/', express.static(path.resolve(__dirname, '../client/')));
app.use('/', oauthRouter, (req, res, next) => {
  console.log('im back in the server file')
  res.redirect('/');
});

/**
 * define route handlers
 */
// app.use('/api', apiRouter);

// catch-all route handler for an requests to an unknown route
app.all('*', (req, res) => {
  res.status(404).send('Endpoint does not exist');
});

/**
 * express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log('ERROR: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});

module.exports = app;
