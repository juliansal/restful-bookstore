(function() {
	var Genre = require('../models/genre');
	var genres = module.exports;

		//Get Genres 
	genres.getGenres = function(callback, limit) {
		Genre.find(callback).limit(limit);
	};

	//Get a genre by id 
	genres.getGenreById = function(id, callback) {
		Genre.findById(id, callback);
	};

	//Add a genre
	genres.addGenre = function(genre, callback) {
		Genre.create(genre, callback);
	};

	//Update a genre
	genres.updateGenre = function(id, genre, options, callback) {
		var query = {_id: id};
		var update = {
			name: genre.name
		};
		Genre.findOneAndUpdate(query, update, options, callback);
	};

	genres.deleteGenre = function(id, callback) {
		var query = {_id: id};
		Genre.remove(query, callback);
	};
}());