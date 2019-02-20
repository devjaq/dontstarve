"use strict";

const ingredients = {
  template:`
  <h2>ingredients</h2>

  <section ng-repeat="ingredient in $ctrl.ingredients">
    <p>{{ingredient}}</p>
  </section>
  `,
  controller: [function(){
    const vm = this;
    vm.ingredients = [
      "meat", "small morsel", "monster meat", "egg"
    ]
  }]
}

angular
  .module("App")
  .component("ingredients", ingredients)