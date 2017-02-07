(function() {
	var Book = require('../models/book');
	var books = module.exports;
	var _ = require('lodash');

		//Get Books 
	books.getBooks = function(callback, limit) {
		Book.find(callback).limit(limit);
	};

	//Get a book by id 
	books.getBookById = function(id, callback) {
		Book.findById(id, callback);
	};

	//Add a book
	books.addBook = function(book, callback) {
		Book.create(book, callback);
	};
	
	//Update a book
	books.updateBook = function(id, book, options, callback) {
		var query = {_id: id};
		var update = {};

		_.forEach(book, function(val, key) {
			update[key] = val;
		});

		Book.findOneAndUpdate(query, update, options, callback);
	};

	books.deleteBook = function(id, callback) {
		var query = {_id: id};
		Book.remove(query, callback);
	};
}());