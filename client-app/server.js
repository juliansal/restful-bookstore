(function() {
	var express = require('express');
	var app = express();
	var bodyParse = require('body-parser');

	app.use(bodyParse.json());
	app.use(express.static(__dirname + '/app'));

	app.listen(1337);
	console.log('Running on port 1337...');
}());