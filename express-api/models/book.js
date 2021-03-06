(function() {
	var mongoose = require('mongoose');
	var _ = require('lodash');
	
	var bookSchema = mongoose.Schema({
		title: {
			type: String,
			required: true
		},
		genre: String,
		image_url: String,
		description: String,
		author: String,
		pages: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	var Book = module.exports = mongoose.model('Book', bookSchema);

	// //Get Books 
	// module.exports.getBooks = function(callback, limit) {
	// 	Book.find(callback).limit(limit);
	// };

	// //Get a book by id 
	// module.exports.getBookById = function(id, callback) {
	// 	Book.findById(id, callback);
	// };

	// //Add a book
	// module.exports.addBook = function(book, callback) {
	// 	Book.create(book, callback);
	// };
	
	// //Update a book
	// module.exports.updateBook = function(id, book, options, callback) {
	// 	var query = {_id: id};
	// 	var update = {};

	// 	_.forEach(book, function(val, key) {
	// 		update[key] = val;
	// 	});

	// 	Book.findOneAndUpdate(query, update, options, callback);
	// };

	// module.exports.deleteBook = function(id, callback) {
	// 	var query = {_id: id};
	// 	Book.remove(query, callback);
	// };


}());