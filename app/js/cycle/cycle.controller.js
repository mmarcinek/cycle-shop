;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('Cycles', ['$scope', '$http', 'PARSE', '$location',

  function ($scope, $http, PARSE, $location) {

    $scope.title = 'Tell us about a cool shop';

    var Shops = function (options) {
      this.name = options.name;
      this.address = options.address;
      this.phone = options.phone;
      this.desc = options.desc;
    };

    $scope.addShop = function (x){
      // console.log('click')
      var shop = new Shops(x);
      console.log(x);

      $http.post(PARSE.URL + 'classes/shops', shop, PARSE.CONFIG)

      success( function (){
        $location.path('/');
        $scope.shop = {};

      });

    };
  }

  ])

}());
