const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    tolowercase:true,
    maxlength:50
  },
  firstname:{
    type:String,
    required:true,
    tolowercase:true,
    maxlength:30
  },
  lastname:{
    type:String,
    required:true,
    tolowercase:true,
    maxlength:30
  },
  password:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  followers:[String],
  following:[String],

});


module.exports = mongoose.model('users', UsersSchema);