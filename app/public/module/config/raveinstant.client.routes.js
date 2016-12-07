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
			});

	}

})();
