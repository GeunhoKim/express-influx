var express = require('express');
var bodyParser = require('body-parser');

// counter middleware
var invocation = require('./middleware/counter/invocation.js');
var latency = require('./middleware/counter/latency.js');

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(invocation);
app.use(latency);

router.get('/hello', function(req, res){
    var result = {
        hello: "world!"
    };

    res.json(result);
});

app.use('/api', router);
app.listen(8080);