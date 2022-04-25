const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

const Houses = require("../model/houses.model");

router.get("" , async(req,res)=>{



    try{
        const houses = await Houses.find(req.query).lean().exec();
        return res.send(houses);
    }
    catch(e){
        return res.send(e.message);
    }

})

router.get("/:id" , async(req,res)=>{

    console.log(req.params)


    try{
        const houses = await Houses.findById(req.params.id).lean().exec();
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

router.patch("/:id", async(req,res)=>{


    

    try{

        const houses = await Houses.findByIdAndUpdate(req.params.id,req.body);
        return res.send(houses);

    }
    catch(e){
        return res.send(e.message);
        
    }

})


module.exports = router;


