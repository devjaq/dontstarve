"use strict";

const recipes = {
  template:`
  <h2>Recipes</h2>
  <section class="card-deck">
    <section class="card" ng-repeat="recipe in $ctrl.recipes">
      <h3>{{recipe.name}}</h3>
      <p>{{recipe.ingredients}}</p>
      <p>{{recipe.method}}</p>
    </section>
  </section>
  `,
  controller: [function(){
    const vm = this;
    vm.recipes = {
      "cooked meat": {
        "name": "Cooked Meat",
        "ingredients": "meat",
        "method": "fire"
      },
      "fried egg":{
        "name": "Fried Egg",
        "ingredients": "egg",
        "method": "fire"
      },
      "meaty stew":{
        "name":"",
        "ingredients":"",
        "method":""
      },
      "kebobs":{
        "name":"",
        "ingredients":"",
        "method":""}
      
    }
  }]
}

angular
  .module("App")
  .component("recipes", recipes)