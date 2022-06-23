const express = require('express');
const path = require('path');

const app = express();
const port = 2000;

// Logging and parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Router
const router = require('./routes.js');

// Set up our routes
app.use(router);

// Set up what we are listening on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});