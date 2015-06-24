;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('Cycles', ['$scope', '$http', 'PARSE', '$location',

  function ($scope, $scope, $http, PARSE, $location) {

    var Shop = function (options) {
      this.name = options.name;
      this.address = options.address;
      this.phone = options.phone;
      this.description = options.description;
    };

    var addShop = function (x){
      var store = new Shop(x);

      $http.post('PARSE', 'classes/shops', store, PARSE.CONFIG)

      success( function (){
        $location.path('/');
        $scope.store = {};

      });

    };
  }

  ])

}());
