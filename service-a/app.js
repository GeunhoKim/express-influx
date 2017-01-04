'use strict'

var express = require('express');
var bodyParser = require('body-parser');

// api
var hello = require('./api/hello.js');

// counter middleware
var counter = require('./middleware/counter/counter.js');

// main app
var app = express();

app.use(bodyParser.json());
app.use(counter);
app.use('/api', hello);
app.listen(8080);