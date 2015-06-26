;(function (){

  'use strict';

  angular.module('CycleShop', ['ngRoute', 'uiGmapgoogle-maps'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : 'BmPAHUNCZHUN4bNhwWKaCgz4rEur01PGPUDGL5aT',
        'X-Parse-REST-API-Key'  : 'Ubl7DZKMhYWZUko0fDwqjSklQ5x7J2RCWoYZNIbc'
      }
    }
  })

  .config( [ '$routeProvider',
    function( $routeProvider){

      $routeProvider.when('/', {

        controller: 'Home',
        templateUrl: 'js/cycle/home.tpl.html'

      })

      .when('/add', {
        controller: 'Cycles',
        templateUrl: 'js/cycle/addshop.tpl.html'

      })

      .when('/shop/:id', {
        controller: 'SingleShop',
        templateUrl: 'js/cycle/singleshop.tpl.html'

      });

    }

    ]);


}());
