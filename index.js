var express = require('express');
var app = express();
var bodyparser=require("body-parser");
var mongoose=require('mongoose');

var mroutes=require('./mroutes/mroute');

app.use(bodyparser.json());




mongoose.connect('mongodb://localhost/capgemini');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection error'));
db.once('open',function(){
    console.log('mongo db connection is open.');
});

app.listen("4780",function(){
    console.log("Server is listening to port 4780");
})
app.use('/mongo-api',mroutes);