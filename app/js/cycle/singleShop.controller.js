;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('CycleSingle', ['$scope', 'CycleService', '$routeParams',

    function($scope, CycleService, $routeParams) {

    var id = $routeParams.id;

    CycleService
      .getSingleShop(id)
      .success (function (){
        $scope.CycleSingle = data;
        console.log(data);
      });

    }

  ]);

}());


