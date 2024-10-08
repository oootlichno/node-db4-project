const express = require('express');
const recipeRouter = require('./recipe_router');

const server = express();

server.use(express.json());
server.use('/api', recipeRouter); 


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;