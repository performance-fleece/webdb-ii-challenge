const express = require('express');

const carsRouter = require('./cars/carsRouter');

const server = express();

// server.use(logger);
server.use(express.json());

server.use('/api/cars', carsRouter);

function logger(req, res, next) {
  const time = new Date();
  console.log(`${req.method} to ${req.path} at ${time.toISOString()}`);
}

module.exports = server;
