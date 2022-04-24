const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://boHouse:boHouse_123@cluster0.zoipt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}