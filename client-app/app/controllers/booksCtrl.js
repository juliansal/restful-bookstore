(function() {
	angular.module('App')
		.controller('BooksCtrl', ['$stateParams', '$http', '$location', function($stateParams, $http, $location) {
			var vm = this;
			vm.book = {};

			vm.getBooks = function() {
				$http.get('http://localhost:3000/api/books')
					.then(
						function(success) {
							vm.books = success.data;
						}, 
						function(err) {
							console.log(err);
						}
				);
			};

			vm.bookDetails = function() {
				var id = $stateParams.id;
				$http.get('http://localhost:3000/api/books/' + id)
					.then(
						function(success) {
							vm.book = success.data;
						}, 
						function(err) {
							console.log(err);
						}
				);
			};

			vm.addBooks = function() {
				$http.post('http://localhost:3000/api/books', vm.book)
					.then(
						function(success) {
							//console.log(success.data);
						},
						function(err) {
							console.log(err);
						}
				);
			};

			vm.deleteBook = function(data) {
				$http.delete('http://localhost:3000/api/books/' + data.id)
					.then(
						function(success) {
							vm.getBooks();
						}, 
						function(err) {
							console.log(err);
						}
				);
			};

			vm.editBook = function() {
				$http.put('http://localhost:3000/api/books/' + vm.book._id, vm.book)
					.then(
						function(success) {
							vm.getBooks();
							alert("Book updated");
						}, 
						function(err) {
							console.log(err);
						}
				);
			};
			


		}]);
}());