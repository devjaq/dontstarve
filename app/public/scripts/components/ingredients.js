"use strict";

const ingredients = {
  template:`
  <h2>Ingredients</h2>

  <section ng-repeat="ingredient in $ctrl.ingredients">
  <section class="card">
    <h3>{{ingredient.name|uppercase}}</h3>
    <ul>
      <li>Hunger: {{ingredient.hunger}}</li>
      <li>Health: {{ingredient.health}}</li>
      <li>Sanity: {{ingredient.sanity}}</li>
      <li>Spoilage: {{ingredient.spoilage}}</li>
      <li>Temperature: {{ingredient.temperature}}</li>
      <li>Food Value: {{ingredient.foodValue}}</li>
    </ul>
    <p>{{ingredient}}</p>
    </section>
  </section>
  `,
  controller: [function(){
    const vm = this;
    // vm.ingredients = [
    //   ["meat", ""], "small morsel", "monster meat", "egg"
    // ]
    vm.ingredients = [
      {
        "name":"berries",
        "hunger":"9.375",
        "health":"0",
        "sanity":"0",
        "spoilage":"6",
        "temperature":"",
        "foodValue":"0.5",
        "image":""
      },
      {
        "name":"",
        "hunger":"",
        "health":"",
        "sanity":"",
        "spoilage":"",
        "image":""
      }
    ]
  }]
}

angular
  .module("App")
  .component("ingredients", ingredients)
