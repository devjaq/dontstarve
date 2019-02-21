"use strict";

function dataService($http) {
  let dataStuff = {};
  const getData = () => {
    return $http({
      method: "GET",
      url:"/portal/potus"
    })
    // .then((response)=>{
    //   dataStuff = response;
    //   console.log(dataStuff);
    //   return dataStuff;
    // })
    
  }

  return {
    getData
  }
}

angular
  .module("App")
  .factory("dataService", dataService);