"use strict";

angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
    .when("/welcome", {
      template:`<welcome></welcome>`
    })
    .when("/ingredients", {
      template:`<ingredients></ingredients>`
    })
    .when("/recipes", {
      template:`<recipes></recipes>`
    })
    .otherwise({redirectTo:"/welcome"})
  })