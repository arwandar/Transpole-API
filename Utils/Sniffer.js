var request = require('request');
var config = require('./ConfigSingleton');
var yaml = require('js-yaml');

var Sniffer = function (destination, callback, res) {
    var options = {
        method: 'GET',
        url: 'https://api.navitia.io/v1/coverage/fr-ne/journeys',
        qs: config.url[destination],
        headers: {
            'postman-token': 'b0647f86-bebc-611a-6055-3ab2d71b1b07',
            'cache-control': 'no-cache',
            authorization: 'Basic OWU1NGNkOGEtMTUwNC00MDJlLWJhOTctNjQ3NDE2Nzg1Njk3Og=='
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        callback(yaml.load(body), res);
    });
};

module.exports = Sniffer;
