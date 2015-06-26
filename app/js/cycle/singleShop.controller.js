;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('SingleShop', ['$scope', 'CycleService', '$routeParams',

    function($scope, CycleService, $routeParams) {

    var id = $routeParams.id;

    CycleService
      .getSingleShop(id)
      .success (function (data){
        $scope.shop = data;
      });

    }

  ]);

}());


