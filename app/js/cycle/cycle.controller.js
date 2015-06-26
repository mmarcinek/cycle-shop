;(function (){

  'use strict';

  angular.module('CycleShop')

  .controller('Cycles', ['$scope', '$http', 'PARSE', '$location', 'CycleService',

  function ($scope, $http, PARSE, $location, CycleService) {

    $scope.title = 'Tell us about a cool shop';

    //Add Shop -- needed to invoke $scope event
    $scope.addShop = function (x) {
      // Calls to service for function:
      CycleService.addShop(x).success( function(){
        // navigate home
        $location.path('/');
        // clears form
        $scope.shop = {};
      });

    };

    }

  ])

}());
