"use strict";

angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
    .when("/welcome", {
      template:`<welcome></welcome>`
    })
    .otherwise({redirectTo:"/welcome"})
  })