const os = require('os');
const influx = require('./influx.js');

var host = os.hostname();

/**
 * API Invocation Counter:
 *
 * 함수 호출수를 측정하는 카운터.
 */
var invocation = function (req, res, next) {
    var url = req.originalUrl;
    try {
        influx.writePoints([
            {
                measurement: 'serviceA',
                tags: { host: host, url: url },
                fields: { num_requests: 1 }
            }
        ]).catch(function(err) {
            console.error('error: '+ err.stack);
        });
    } catch(ex) {
        console.error('error:'+ ex.stack);
    }

    next();
};

module.exports = invocation;