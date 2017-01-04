'use strict'

var conf = require('./conf/influx.json');
var Influx = require('influx');

/**
 * Influxdb repository
 */
var influx = new Influx.InfluxDB(conf.endpoint);

influx.schema = [
    {
        measurement: 'serviceA',
        fields: {
            num_requests: Influx.FieldType.INTEGER,
            latency: Influx.FieldType.FLOAT
        },
        tags: [
            'url',
            'host'
        ]
    }
];

module.exports = influx;