const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    
    Name : {type : String , required : true},
    City : {type : String , required : true},
    Address : {type : String , required : true},
    Capacity : {type : String , required : true},
    Cost_per_day  : {type : String , required : true},
    Verified : {type : String , required : true},
    Rating : {type : String , required : true},
    Pet_types : {type : String , required : true},
    Sleep : {type : String , required : true},
    Walks : {type : String , required : true},
    Type_of_home : {type : String , required : true},
    Area_size : {type : String , required : true},
    Emergency_transport : {type : String , required : true}
  
},{
    versionKey : false,
    timeseries : true
})


module.exports = mongoose.model("Houses" , houseSchema)