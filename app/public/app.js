(function(){

	'user strict';

	var dependencies = [ 'ngRoute', 'ngCart', 'ui.bootstrap'];

	angular.module('raveinstant', dependencies).config(Config).run(Run);

	Config.$inject = ['$locationProvider'];

	function Config($locationProvider){
		$locationProvider.hashPrefix('!');
	}

	if (window.location.hash === '#_=_'){
		window.location.hash = '#!';
	}

	//bootstrap angular
	angular.element(document).ready(function(){

		angular.bootstrap(document, ['raveinstant']);

	});

	Run.$inject = [ 'ngCart' ];

	function Run(ngCart){
		ngCart.empty();

	}



})();
