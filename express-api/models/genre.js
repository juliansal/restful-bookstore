(function() {
	var mongoose = require('mongoose');
	
	var genreSchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	});

	var Genre = module.exports = mongoose.model('Genre', genreSchema);

	//Get Genres 
	module.exports.getGenres = function(callback, limit) {
		Genre.find(callback).limit(limit);
	};

	//Get a genre by id 
	module.exports.getGenreById = function(id, callback) {
		Genre.findById(id, callback);
	};

	//Add a genre
	module.exports.addGenre = function(genre, callback) {
		Genre.create(genre, callback);
	};

	//Update a genre
	module.exports.updateGenre = function(id, genre, options, callback) {
		var query = {_id: id};
		var update = {
			name: genre.name
		};
		Genre.findOneAndUpdate(query, update, options, callback);
	};

}());