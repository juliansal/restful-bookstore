(function() {
	angular.module('App')
		.controller('BooksCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
			console.log("Books Ctrl");
			
			$scope.getBooks = function() {
				$http.get('http://localhost:3000/api/books')
				.then(
					function(success) {
						// angular.forEach(success.data, function(val, key) {
						// 	console.log(val.title);
						// });
						$scope.books = success.data;
					}, 
					function(err) {
						console.log(err);
					}
				);
			};
			//$scope.getBooks();

		}]);
}());