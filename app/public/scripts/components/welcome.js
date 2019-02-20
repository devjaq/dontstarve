"use strict";

const welcome = {
  template:`
  <p>    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam doloremque id cum eligendi quod animi optio velit sapiente? Vel eum ex eligendi possimus, est quasi velit fuga commodi qui nihil.
  </p>
  `

}

angular
  .module("App")
  .component("welcome", welcome);