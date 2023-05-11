//endpoints room
const express = require ("express");
const router = express.Router();

const Room = require('../models/room');

//endpoint to fetch details for room
 router.get("/getallrooms", async(req , res) => {

        try {
            const rooms =await Room.find({})
            res.send(rooms)
        } 
        catch (error) {
            return res.status(400).json({ message : error});
        }
 });


 router.post("/getroombyid", async(req , res) => {
        const roomid=req.body.roomid
    try {
        const room =await Room.findOne({ _id : room})
        res.send(room)
    } 
    catch (error) {
        return res.status(400).json({ message : error});
    }
});

 module.exports=router;
