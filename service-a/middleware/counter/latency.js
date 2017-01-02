'use strict'

const os = require('os');
const influx = require('./influx.js');
var onHeaders = require('on-headers');

var host = os.hostname();

/**
 * API Latency Counter:
 *
 * 함수 응답 시간을 기록하는 카운터.
 */
var latency = function (req, res, next) {

    var url = req.originalUrl;
    var startAt = process.hrtime();


    onHeaders(res, function onHeaders() {
        var diff = process.hrtime(startAt);
        var timetaken = diff[0] * 1e3 + diff[1] * 1e-6;

        try {
            influx.writePoints([
                {
                    measurement: 'service-a',
                    tags: { host: host, url: url },
                    fields: { latency: timetaken }
                }
            ]).catch(function(err) {
                console.error('error: '+ err.stack);
            });
        } catch(ex) {
            console.error('error:'+ ex.stack);
        }
    });

    next();
};

module.exports = latency;