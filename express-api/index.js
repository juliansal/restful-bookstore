(function() {
	var express = require('express');
	var app = express();
	var bodyParse = require('body-parser');
	var mongoose = require('mongoose');

	Genre = require('./models/genre');
	Book = require('./models/book');

	app.use(bodyParse.json());

	//Connect to mongoose
	mongoose.connect('mongodb://localhost/bookstore');
	var db = mongoose.connection;

	//API requests
	app.get('/', function(req, res) {
		res.send("Please use api/books");
	});

	app.get('/api/genres', function(req, res) {
		Genre.getGenres(function(err, genres) {
			if(err) {
				throw err;
			}
			res.json(genres);
		})
	});

	app.get('/api/genres/:_id', function(req, res) {
		Genre.getGenreById(req.params._id, function(err, genre) {
			if(err) {
				throw err;
			}
			res.json(genre);
		})
	});

	app.post('/api/genres', function(req, res) {
		var genre = req.body;
		Genre.addGenre(genre, function(err, genre) {
			if(err) {
				throw err;
			}
			res.json(genre);
		})
	});

	app.get('/api/books', function(req, res) {
		Book.getBooks(function(err, books) {
			if(err) {
				throw err;
			}
			res.json(books);
		})
	});

	app.get('/api/books/:_id', function(req, res) {
		Book.getBookById(req.params._id, function(err, book) {
			if(err) {
				throw err;
			}
			res.json(book);
		})
	});

	app.post('/api/books', function(req, res) {
		var book = req.body;
		Book.addBook(book, function(err, book) {
			if(err) {
				throw err;
			}
			res.json(book);
		})
	});


	app.listen(3000);
	console.log('Running on port 3000');
}());