const express = require("express");

const connect = require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const housesController = require("./controller/houses.controller");
const userController = require("./controller/user.controller");

app.use("/houses" , housesController);
app.use("/user" , userController);

app.listen(5000 , async()=>{
    try{

        await connect();
        console.log("listening to 5000")

    }
    catch(e){
        console.log(e.message);
    }
} )