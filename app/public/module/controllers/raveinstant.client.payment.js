(function(){
  'use strict';

  angular.module('raveinstant').controller('paymentController', paymentController);

  paymentController.$inject = [ '$scope', '$rootScope', '$http', 'ngCart' ];

  function paymentController( $scope, $rootScope, $http, ngCart){
      console.log('In paymentController');


      var items = ngCart.getItems();
      console.log('cart', items);


      //produce customer information form
      var p = $rootScope.customer;
      console.log('p', p);


      $scope.payPalSettings = {
            'paypal':
              {
                'business': 'mjsiiteri@gmail.com',
                'no_note': 'test transaction'
              },

              'form':
                {
                  'first_name' : p.first_name,
                  'last_name' : p.last_name,
                  'phonea' : p.phone_a,
                  'phoneb' : p.phone_b,
                  'phonec' : p.phone_c,
                  'add1' : p.add1,
                  'add2' : p.add2,
                  'add2' : p.city,
                  'add2' : p.state,
                  'add2' : p.zip,
                  'email' : p.email,
                },

                'cart_quantity': items.length

          };
          console.log('payPalSettings w/ form', $scope.payPalSettings);






      $scope.payPalSettings.cart = [];
      for( var item in items ){
        console.log('item', item);
        $scope.payPalSettings.cart.push({
                                        'item_name': items[item]._name,
                                        'item_price': items[item]._price,
                                        'item_quantity': items[item]._quantity
                                        });
      }

      console.log($scope.payPalSettings.cart);

      //take in form and fill in payPalSettings as well as update other parts of the form with $rootScrope

      //pass into next rootScope and then send all off to paypal


      console.log($scope.payPalSettings);


  }


})();
