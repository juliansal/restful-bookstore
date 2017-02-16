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
				console.log($stateParams.id);
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
							console.log(success.data);
						},
						function(err) {
							console.log(err);
						}
				);
			};

			vm.deleteBook = function(data) {
				console.log(data.id);
				$http.delete('http://localhost:3000/api/books/' + data.id)
					.then(
						function(success) {
							vm.getBooks();
							// vm.book = success.data;
						}, 
						function(err) {
							console.log(err);
						}
				);
			};

			vm.editBook = function() {
				console.log(vm.book);
				// $http.put('http://localhost:3000/api/books/' + data.id)
				// 	.then(
				// 		function(success) {
				// 			vm.getBooks();
				// 			// vm.book = success.data;
				// 		}, 
				// 		function(err) {
				// 			console.log(err);
				// 		}
				// );
			};


		}]);
}());