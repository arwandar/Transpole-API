var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var Sniffer = require('./Utils/Sniffer');
var config = require('./Utils/ConfigSingleton');


var application = express();

application.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

application.get('/lille', function (req, res) {
    new Sniffer('lille', mySendFct, res);
});

application.get('/tcg', function (req, res) {
    new Sniffer('tcg', mySendFct, res);
});

function mySendFct(time, res) {
    res.status(200).send(time);
}

application.listen(config.server.port, function () {
    console.log("server init");
});
