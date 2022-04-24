const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

const Houses = require("../model/houses.model");

router.get("" , async(req,res)=>{

    try{
        const houses = await Houses.find().lean().exec();
        return res.send(houses);
    }
    catch(e){
        return res.send(e.message);
    }

})

router.post("" , async (req,res)=>{

    try{
        const houses = await Houses.create(req.body);
        return res.send(houses);
    }
    catch(e){
        return res.send(e.message);
    }

})


module.exports = router;


