(function(){

  'use strict';


  angular.module('raveinstant').controller('checkoutController', checkoutController);

  checkoutController.$inject = ['$scope', '$rootScope', '$http', '$location', 'ngCart'];


  function checkoutController($scope, $rootScope, $http, $location, ngCart){
    var vm = this;

  $scope.toCheckout = function(){
    $rootScope.customer = vm;
    $location.url('/payment');
  }


  }

})();
