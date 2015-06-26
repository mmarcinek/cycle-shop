;(function (){

  'use strict';

  angular.module('CycleShop')

  .service('CycleService', ['$http', 'PARSE',

    function($http, PARSE) {

      var endpoint = PARSE.URL + 'classes/shops/';

      //CycleShop Constructor
    var Shops = function (options) {
      this.shopName = options.shopName;
      this.street = options.street;
      this.city = options.city;
      this.state = options.state;
      this.zip = options.zip;
      this.phone = options.phone;
      this.desc = options.desc;
    };

    // Add a new Shop
    this.addShop = function (x){
      var shop = new Shops(x);
      return $http.post(endpoint, shop, PARSE.CONFIG);
    };

    // Get the Bike Shop Array

    this.getShops = function () {
      return $http.get(endpoint, PARSE.CONFIG);
    };

    this.getSingleShop = function (id) {
      return $http.get(endpoint+id, PARSE.CONFIG);

    }



    }

    ]);

}());
