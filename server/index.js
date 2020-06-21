const express = require('express');
const { sampleRouter } = require('./routes/home-route');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/sample1', sampleRouter);
// app.use(sampleRouter);
app.get('/api/test1', (req, res) => {

  console.log('hehe > get > test1');
  res.status(500);
  res.json({ test: "no" });
});

app.get('/api/test2', (req, res) => {

  console.log('hehe > get > test2');
  res.status(200);
  res.json({ test: "yes" });
});

app.get('*', (req, res) => {

  console.log('hehe > get > *');
  res.status(404);
  res.send('wrong');
});

app.listen('3000', () => {
  console.log('hi');
});