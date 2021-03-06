'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();
const http = require('http').createServer(app);
let server = null;

app.use(bodyParser.json());

//CORS + HEADERS
app.use((req, res, next) => {
  const accessControlAllowMethods = [
    'POST',
    'GET',
    'PUT',
    'DELETE',
    'OPTIONS',
  ];

  const accessControlAllowHeaders = [
    'Location',
    'Authorization',
    'Content-Type',
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  // Access-Control-Allow-Methods: put accessControlAllowHeaders separated by comma
  res.header(
    'Access-Control-Allow-Methods',
    accessControlAllowMethods.join(','),
  );
  // put accessControlAllowHeaders separated by comma
  res.header(
    'Access-Control-Allow-Headers',
    accessControlAllowHeaders.join(','),
  );
  res.header(
    'Access-Control-Expose-Headers',
    accessControlAllowHeaders.join(','),
  );
  next();
});

/**
 *  ROUTES
 */
app.use('/api', routes.userRouter);

app.use('*', (req, res, next) =>
  res.status(404).send({
    message: 'esta ruta no existe o esta inactiva',
  }),
);

/**
 * Special route middleware to catch all next(err) generated by controllers
 */
app.use((err, req, res, next) => {
  console.error('Error 500', err);
  return res.status(500).json({
    message: err.message,
  });
});

/**
 * Start listening requests at a given port
 * @param {Number} port
 */
async function listen(port) {
  if (server === null) {
    server = await http.listen(port);
  } else {
    console.error("Can't listen, server already initialized");
  }
}

/**
 * Stop listening requests
 */
async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error("Can't close a non started server");
  }
}

module.exports = {
  listen,
  close,
};
