(function(){

	'use strict';


	angular.module('raveinstant').config(Config);

	Config.$inject = [ '$routeProvider' ];

	function Config($routeProvider){

		$routeProvider.when('/', {
				templateUrl: 'module/views/raveinstant.client.index.html',
				controller: 'mainController'
			})
			.when('/cart', {
						templateUrl: 'module/views/raveinstant.client.cart.html',
						controller: 'cartController'
			}).when('/checkout', {
						templateUrl: 'module/views/raveinstant.client.payment.html',
						controller: 'checkoutController',
						controllerAs: 'vm'
			}).when('/payment', {
						templateUrl: 'module/views/raveinstant.client.checkout.html',
						controller: 'paymentController'
			});

	}

})();
