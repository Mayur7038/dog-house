const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.post("/signUp" , async(req,res)=>{
    try{


        let user = await User.findOne({email : req.body.email}).lean().exec();
        if(user) return res.status(501).send("user alredy exists");
        user = await User.create(req.body);

        return res.send(user);

    }
    catch(e){
        return res.send(e.message);
    }
})


router.post("/login" , async(req,res)=>{

    try{

        const user = await User.findOne({email : req.body.email});
        if(! user) return res.status(501).send("email or password is wrong");
        const match = user.checkPassword(req.body.password); 
        if( !match) return res.status(501).send("email or password is wrong"); 
        res.send(user);


    }
    catch(e){
        return res.send(e.message);
    }

})

module.exports = router;