;(function (){

  'use strict';

  angular.module('CycleShop', ['ngRoute'])

  .config(['$routeProvider',
    function( $routeProvider){

      $routeProvider.when('/', {
        controller: 'Cycles',
        templateUrl: 'js/cycle/home.tpl.html'
      })

      .when('/add', {
        controller: 'Cycles',
        templateUrl: 'js/cycle/addshop.tpl.html'
      });
    }


    ]);


}());
