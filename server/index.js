const express = require('express');
const { sampleRouter } = require('./routes/home-route');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

/* Application level middleware  with no mount path*/
app.use(function (req, res, next) {
  // console.log('Time:', Date.now())
  next()
});

/* Application level middleware  with mount path*/
app.use('/api/test1', function (req, res, next) {
  // console.log('yo yo yo', req.method)
  next();
  // res.send('nnnnnnnn');
})

/* series of middleware functions at a mount point */
app.use('/api/test1', function (req, res, next) {
  // console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  // console.log('Request Type:', req.method)
  next()
});

/* start - skip any middleware . then add next(route) */
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})

/* end - skip any middleware . then add next(route) */


// same way , we have router level middleware. for skipping , pass next('router')

/*Error-handling middleware*/


// Built-in middleware - express.static, express.json,express.urlencoded

// third party middleware - cookie-parser




app.use(function (err, req, res, next) {
  // console.error(err.stack)
  // res.status(500).send('Something broke!')
})



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

  // res.setHeaders - calls the native Node method

  // res.set - sets headers

  // res.headers - an alias to res.set
  // res.set({
  //   'Content-Type': 'text/plain',
  //   'Content-Length': '123',
  //   'ETag': '12345'
  // })
  console.log('hehe > get > test2');
  res.status(200);
  res.header('custom-header1', 'test-head1');
  res.set({
    'custom-header': 'test-head'
  });
  res.set({
    'one': 1,
    'two': 2
  });
  res.json({ test: "yes" });
});

app.post('/api/test1', (req, res) => {

  console.log('headers', req.headers['custom-header']);
  console.log('hehe > post > test1');
  if (req.body.param === 1) {
    res.status(200);
    res.send(`${req.body.param} - test1`);
  } else {
    res.status(201);
    res.send(`${req.body.param}`);
  }

});

app.get('*', (req, res) => {

  console.log('hehe > get > *');
  res.status(404);
  res.send('wrong');
});

app.listen('3001', () => {
  console.log('hi');
});

module.exports = app;