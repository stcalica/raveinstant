(function(){

  'use strict';


  angular.module('raveinstant').controller('cartController', cartController);

  cartController.$inject = ['$scope', '$http', 'ngCart'];


  function cartController($scope, $http, ngCart){
      console.log('in Cart');
      var items =  ngCart.getItems();
      console.log(items); 
   
  }

})();
