'use strict'

var express = require('express');

var hello = express.Router();

hello.get('/hello', function(req, res){
    var result = {
        hello: "world!"
    };

    res.json(result);
});

module.exports = hello;