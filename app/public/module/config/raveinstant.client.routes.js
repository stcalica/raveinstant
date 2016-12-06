(function(){
	
	'use strict';


	angular.module('raveinstant').config(Config);

	Config.$inject = [ '$routeProvider' ];

	function Config($routeProvider){
		
		$routeProvider.when('/', {
				templateUrl: 'module/views/index.html',
				controller: 'mainController',
				controllerAs: 'main'
			});

	}

})();
