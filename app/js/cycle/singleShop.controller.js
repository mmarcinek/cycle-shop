;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('SingleShop', ['$scope', 'CycleService', '$routeParams', '$location',

    function($scope, CycleService, $routeParams, $location) {

    var id = $routeParams.id;

    CycleService
      .getSingleShop(id)
      .success (function (data){
        $scope.shop = data;
      });



    $scope.deleteThis = function (d){
      CycleService.deleteShop(d).success( function (){
        $location.path('/');
      });
    }
  }

  ]);

}());


