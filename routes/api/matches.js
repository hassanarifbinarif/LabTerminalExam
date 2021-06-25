const express = require("express");
let router = express.Router();
var Matches = require("../../models/matchesSchema");

router.get('/', async (req,res)=>{
    let matches = await Matches.find()
    return res.send(matches);
})

router.post('/', async(req,res)=>{
    let matches = new Matches();

    if(req.body.teamA === req.body.teamB) return res.status(400).send("Bad Request! Cannot match same teams.");
    matches.city = req.body.city;
    matches.date = new Date(new Date(req.body.date).getDate());
    matches.teamA = req.body.teamA;
    matches.teamB = req.body.teamB;
    await matches.save();
    return res.status(200).send(matches);
})

module.exports = router;