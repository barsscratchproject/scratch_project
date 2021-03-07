const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

/**
 * handle parsing request body
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * serve the bundle file
 */
app.use('/build', express.static(path.resolve(__dirname, '../build/')));

/**
 * handle requests for static files
 */

app.use('/', express.static(path.resolve(__dirname, '../client/')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
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

  const errorObj = { ...defaultErr, ...err };
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
