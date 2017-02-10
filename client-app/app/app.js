(function() {
	angular.module('App', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/views/books.html',
					controller: 'BooksCtrl as vm'
				})
				.state('edit', {
					url: '/edit-book',
					templateUrl: '/views/editBook.html'
				})
				.state('book-details', {
					url: '/book-details/:id',
					templateUrl: '/views/bookDetails.html',
					controller: 'BooksCtrl as vm'
				})
				.state('add-book', {
					url: '/add-book',
					templateUrl: '/views/addBook.html'
				});
				$urlRouterProvider.otherwise('/');
		});
}());