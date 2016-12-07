(function(){
  'use strict';


  angular.module('raveinstant').controller('mainController', mainController);

  mainController.$inject = [ '$scope', '$http', 'ngCart' ];

  function mainController( $scope, $http, ngCart){
      console.log('In Controller');
      $scope.payPalSettings = {
            'paypal':
              {
                'business': 'mjsiiteri@gmail.com'
              }
          };

      console.log($scope.payPalSettings);
  }


})();
