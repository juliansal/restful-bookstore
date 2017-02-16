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
					url: '/edit-book/:id',
					templateUrl: '/views/editBook.html',
					controller: 'BooksCtrl as vm'
				})
				.state('book-details', {
					url: '/book-details/:id',
					templateUrl: '/views/bookDetails.html',
					controller: 'BooksCtrl as vm'
				})
				.state('add-book', {
					url: '/add-book',
					templateUrl: '/views/addBook.html',
					controller: 'BooksCtrl as vm'
				});
				$urlRouterProvider.otherwise('/');
		});
}());