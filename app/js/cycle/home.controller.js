;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('Home', ['$scope', 'CycleService',

    function ($scope, CycleService) {

      $scope.map = { center:
       {
        latitude: 33.7622229802915,
        longitude: -84.33107501970849
         },
        zoom: 12
      };


      CycleService
        .getShops()
        .success(function (data) {
          $scope.CycleList = data.results;
        });

      // CycleService
      //   .getLocationMarker()
      //   .success( function (data){
      //     console.log(data);
      //   });

    }

    ]);

}());
