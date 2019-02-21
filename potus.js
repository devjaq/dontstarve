const express = require('express');
const dataRouter = express.Router();

const rp = require('request-promise');
const url = 'https://dontstarve.fandom.com/wiki/Food';

dataRouter.get("/potus", (req,res) => {

// })

  rp(url)
  .then(function(html){
    //success!
    // console.log(html);
    // return html;
    res.send(html);
  })
  .catch(function(err){
    //handle error
  });
})

module.exports = dataRouter;