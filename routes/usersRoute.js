const { Router } = require("express");
const express = require('express');
const router = express.Router();
const user = require("../models/user")

router.post("/register", async(req, res) => {
   const newuser=new user(req.body)

   try {
    const user = await newuser.save()
    res.send("SUCCESS REGISTRARTION")
   } catch (error) {
    return res.status(400).json({error});
   }

});

router.post("/login", async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await user.findOne({email: email, password : password})
        if(user){
            const temp= {
                name : user.name,
                email: user.email,
                isAdmin : user.isAdmin,
                _id : user._id,
            }
            res.send(user)
        }
        else{
            return res.status(400).json({message: 'login failed'});
        }
        
    } catch (error) {
        return res.status(400).json({error});
    }
});

module.exports = router