;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('CycleSingle', ['$scope', '$routeParams',

    function($scope, $routeParams)

    var id = $routeParams.id;

     $http.get(PARSE.URL + 'classes/shops', PARSE.CONFIG)

      .success( function (data){
        $scope.cycleList = data.results;
      });

    ]);

}());
