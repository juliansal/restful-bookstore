(function() {
	var mongoose = require('mongoose');
	
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

	//Get Books 
	module.exports.getBooks = function(callback, limit) {
		Book.find(callback).limit(limit);
	};

	//Get a book by id 
	module.exports.getBookById = function(id, callback) {
		Book.findById(id, callback);
	};

	//Add a book
	module.exports.addBook = function(book, callback) {
		Book.create(book, callback);
	};


}());