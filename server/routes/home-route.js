const express = require('express');

const sampleRouter = express.Router();

// sampleRouter.get('/api/sample/get', (req, res) => {

//   res.send('sample - get');
// })

sampleRouter.get('/get', (req, res) => {

  res.send('sample - get');
})

module.exports = {
  sampleRouter
};

