const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email :String,
    username : String,
    password: String
},
{versionKey : false});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
