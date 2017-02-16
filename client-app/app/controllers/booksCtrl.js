(function() {
	angular.module('App')
		.controller('BooksCtrl', ['$scope', '$stateParams', '$http', '$location', function($scope, $stateParams, $http, $location) {
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


		}]);
}());