var Register = require('prom-client').register;
var Counter = require('prom-client').Counter;
var Histogram = require('prom-client').Histogram;
var Summary = require('prom-client').Summary;
var ResponseTime = require('response-time');
//var Logger = require('./logger');


module.exports.numOfRequests = numOfRequests = new Counter({
    name: 'numOfRequests',
    help: 'Number of requests made',
    labelNames: ['method']
});

module.exports.pathsTaken = pathsTaken = new Counter({
    name: 'pathsTaken',
    help: 'Paths taken in the app',
    labelNames: ['path']
});

module.exports.responses = responses = new Summary({
    name: 'responses',
    help: 'Response time in millis',
    labelNames: ['method', 'path', 'status']
});

module.exports.startCollection = function () {
    //Logger.log(Logger.LOG_INFO, `Starting the collection of metrics, the metrics are available on /metrics`);
    require('prom-client').collectDefaultMetrics();
};

module.exports.requestCounters = function (req, res, next) {
    if (req.path != '/metrics') {
        numOfRequests.inc({ method: req.method });
        pathsTaken.inc({ path: req.path });
    }
    next();
}

module.exports.responseCounters = ResponseTime(function (req, res, time) {
    if(req.url != '/metrics') {
        responses.labels(req.method, req.url, res.statusCode).observe(time);
    }
})

module.exports.injectMetricsRoute = function (App) {
    App.get('/metrics', (req, res) => {
        res.set('Content-Type', Register.contentType);
        res.end(Register.metrics());
    });
};
