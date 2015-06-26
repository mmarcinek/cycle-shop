;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('CycleList', ['$scope', 'CycleService',

    function ($scope, CycleService) {

      $scope.map = { center:
       {
        latitude: 45,
        longitude: -73
         },
        zoom: 8
      };


      CycleService
        .getShops()
        .success(function (data) {
          $scope.CycleList = data.results;
        });


    }

    ]);

}());
