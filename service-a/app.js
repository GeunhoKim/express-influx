'use strict'

var express = require('express');
var bodyParser = require('body-parser');

// api
var hello = require('./api/hello.js');

// counter middleware
var invocation = require('./middleware/counter/invocation.js');
var latency = require('./middleware/counter/latency.js');

// main app
var app = express();

app.use(bodyParser.json());
app.use(invocation);
app.use(latency);
app.use('/api', hello);
app.listen(8080);