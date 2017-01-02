'use strict'

var conf = require('./conf/influx.json');
const Influx = require('influx');
var influx;

/**
 * Influxdb repository
 */
influx = new Influx.InfluxDB(conf.endpoint);

influx.schema = [
    {
        measurement: 'service-a',
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