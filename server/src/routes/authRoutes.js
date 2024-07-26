const express = require('express');
const UserModel = require('../models/UserModel');

const router = express.Router();

router.post('/register',  async  function (req,res)
{ 
        var userObj  = new  UserModel({ 
                email : req.body.email,	
                username  :  req.body.username,
                password   : req.body.password,
              });

        let newObj  =  await  userObj.save(); 
		
		var result = {};
		result.status  = "Register Successfull!!";
		
		res.send(result);           
});

router.post("/Login", async function (req, res) {
  try {

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({ username: username });
    if (existingUser && existingUser.password === password) {
      console.log("This user exists");
      return res.status(200).json({ message: "User already exists" });
    } else {
      return res.status(400).json({ message: "User does not exists" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
