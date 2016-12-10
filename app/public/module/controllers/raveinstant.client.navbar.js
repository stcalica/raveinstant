(function(){
  'use strict';

  angular.module('raveinstant').controller('navController', navController);
  navController.$inject = ['$scope', '$location', 'ngCart'];


  function navController($scope, ngCart){
    $("#side-menu").hide();
    $scope.ngCart = ngCart;

    if(window.innerWidth < 1000){
          $(".cart-summary").hide();
    }


    $scope.navCollapse = function(){
        $("#side-menu").toggle();
    };

  $(window).resize(function(){
    if(window.innerWidth < 1000){
          $(".cart-summary").hide();
    }
  });



  };

})();
