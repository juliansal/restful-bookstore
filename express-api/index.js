(function() {
	var express = require('express');
	var app = express();
	var bodyParse = require('body-parser');
	var mongoose = require('mongoose');

	//Connect to mongoose
	mongoose.connect('mongodb://localhost/bookstore');
	var db = mongoose.connection;

	//API requests
	app.get('/', function(req, res) {
		res.send("Please use api/books");
	});

	app.listen(3000);
	console.log('Running on port 3000');
}());