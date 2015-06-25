;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('CycleList', ['$scope', '$http', 'PARSE',

    function ($scope, $http, PARSE) {

      $scope.title = "Cool Shops";

      $scope.cycleList = [];

      $http.get(PARSE.URL + 'classes/shops', PARSE.CONFIG)

      .success( function (data){
        $scope.cycleList = data.results;

      });
    }

    ]);

}());
