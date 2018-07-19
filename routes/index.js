var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

axios.get("https://pokeapi.co/api/v2/pokemon/1/").then(function(res){
  console.log(res.data);
}).catch(function(error){
  if(error){
    console.log(error)
  }
});

module.exports = router;
