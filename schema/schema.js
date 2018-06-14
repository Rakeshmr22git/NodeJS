var mongoose=require('mongoose');
var companies= mongoose.model('companies', new mongoose.Schema({
    name:String,
    number_of_employees:String,
    founded_year:Number,
    overview:String,
    total_money_raised:String,
    offices:[{city:String,address1:String,address2:String,zip_code:String}]
}),'companies');

module.exports=companies;