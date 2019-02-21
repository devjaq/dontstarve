"use strict";

const test = {
  template: `
  <ng-bind-html ng-bind-html-unsafe="$ctrl.finalText"></ng-bind-html>
  
  `,
  controller: [
    "dataService",
    function(dataService) {
      const vm = this;
      vm.getdata = dataService.getData().then(response => {
        vm.results = response.data;
        // console.log(vm.results);
        vm.start = vm.results.indexOf("<body");
        vm.end = vm.results.lastIndexOf("body");
        console.log(vm.start, vm.end);
        vm.finalText = vm.results.slice(vm.start, vm.end + 6);

        vm.start = vm.finalText.indexOf(">");
        vm.end = vm.finalText.lastIndexOf("<");
        vm.finalText = vm.finalText.slice(vm.start + 1, vm.end);
        console.log(vm.results.length, vm.finalText.length);

        // ///// div soup
        // vm.start = vm.finalText.indexOf("<div");
        // // console.log(vm.finalText.charAt(vm.start + 5));
        // while (vm.finalText.indexOf("<div") !== -1) {
        //   vm.finalText = vm.finalText.replace("<div", "");
        // }
        // while (vm.finalText.indexOf("</div>") !== -1) {
        //   vm.finalText = vm.finalText.replace("</div>", "");
        // }

        ///// strip script tags
        while (vm.finalText.indexOf("<script") !== -1) {
          vm.start = vm.finalText.indexOf("<script");
          vm.end = vm.finalText.indexOf("</script>") + 8;
          vm.newString = "";
          for (let i = vm.start; i <= vm.end; i++) {
            // add all characters between two indexes to array, then concat to get a complete string?
            vm.newString = vm.newString.concat("", vm.finalText.charAt(i));
          }
          // replace string w/ ""
          // console.log(vm.newString);
          vm.finalText = vm.finalText.replace(vm.newString, "");
        }
        console.log(vm.results.length, vm.finalText.length);
        vm.finalText
      });
    }
  ]
};
angular.module("App").component("test", test);
