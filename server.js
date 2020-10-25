var express = require('express');
var url = require('url');
var app = express();

app.get('/inch-to-cm', function(req, res) {
	var reqQuery = url.parse(req.url, true).query;
	var respObj = {};
	respObj['inputUnit'] = 'inch';
	respObj['inputValue'] = reqQuery['measurement'];
	respObj['outputUnit'] = 'cm';
	respObj['outputValue'] = reqQuery['measurement'] * 2.54;
	res.json(respObj);
});

app.get('/cm-to-inch', function(req, res) {
	var reqQuery = url.parse(req.url, true).query;
	var respObj = {};
	respObj['inputUnit'] = 'cm';
	respObj['inputValue'] = reqQuery['measurement'];
	respObj['outputUnit'] = 'inch';
	respObj['outputValue'] = reqQuery['measurement'] / 2.54;
	res.json(respObj);
});

app.get('/ft-to-m', function(req, res) {
	var reqQuery = url.parse(req.url, true).query;
	var respObj = {};
	respObj['inputUnit'] = 'feet';
	respObj['inputValue'] = reqQuery['measurement'];
	respObj['outputUnit'] = 'm';
	respObj['outputValue'] = reqQuery['measurement'] / 3.28;
	res.json(respObj);
});

app.get('/m-to-ft', function(req, res) {
	var reqQuery = url.parse(req.url, true).query;
	var respObj = {};
	respObj['inputUnit'] = 'm';
	respObj['inputValue'] = reqQuery['measurement'];
	respObj['outputUnit'] = 'feet';
	respObj['outputValue'] = reqQuery['measurement'] * 3.28;
	res.json(respObj);
});

app.listen(port = 3000, function() {
	console.log("Listening to port: " + port);
});
