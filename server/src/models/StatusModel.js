var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoboticStatus = new Schema(
    {
        Name : String,
        Description : String,
        Status : String,
        CreatedBy : String
    },
    {versionKey : false,
        timestamps: { createdAt: 'CreatedAt', updatedAt: 'UpdatedAt' } 
    },
);

var RoboticModel = mongoose.model("Status", RoboticStatus);

module.exports = RoboticModel;
