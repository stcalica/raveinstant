(function(){
  'use strict';

  angular.module('raveinstant').controller('navController', navController);

  navController.$inject = ['$scope', 'ngCart'];

  function navController($scope, ngCart){


    console.log('navController up!');
    var open = false;
    $scope.navCollapse = function(){
      //console.log('before click', open);
      open = (open == false) ? true : false;
      //console.log('after click', open);
      
      //open up menu



    };

  }

})();
