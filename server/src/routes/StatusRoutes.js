const express = require("express");
const StatusModel = require("../models/StatusModel");
const router = express.Router();

router.get("/status", async function (req, res){

    let result =await StatusModel.find({},{"_id":0});

    try{
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }

});
router.post("/status", async function (req, res) {
    try {
        const { Name, Description, Status, CreatedBy } = req.body;

        const newStatus = new StatusModel({ Name, Description, Status, CreatedBy });
        await newStatus.save();

        res.status(201).send(newStatus);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;