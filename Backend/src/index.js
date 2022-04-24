const express = require("express");
const { connect } = require("react-redux");


const app = express();




app.listen(5000 , ()=>{
    try{

        await connect();
        console.log("listening to 5000")

    }
    catch(e){
        console.log(e.message);
    }
} )