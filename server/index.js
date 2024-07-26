const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const StatusRoutes = require("./src/routes/StatusRoutes");
const AuthRoutes = require("./src/routes/authRoutes");
const connectDB = require('./config/db');

var app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use("/api",StatusRoutes);
app.use("/api",AuthRoutes);

app.get("/", function(req,res)
{
    res.send("Welcome to API");
})

connectDB().then(() => {
    var server = app.listen(3005, function () {
        console.log("Server Started. URL: http://localhost:3005");
    });
});

