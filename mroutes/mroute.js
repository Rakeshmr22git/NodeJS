var express = require('express');
var route=express.Router();
var comapnies=require('../schema/schema');
route.get('/companies/:name',function(request,response){
let names=request.params.name;
//console.log('name :' + names);
comapnies.find({name: names},function(err,data){
if(err){
    response.json({});
}
else{
    console.log('data :' + data);
    response.json(data);
}
});
});

module.exports=route;

