const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  title:{
    type:String,
    maxlength:50,
    required:true,
    unique: true,
  },
  content:{
    type:String,
    maxlength:2000,
    required:true,
  },
  img:String,
  createdAt:{
    type:Date,
    default:Date.now(),
  },
  likes:[String],
  user:{
    type:Schema.Types.ObjectId,
    ref:'users',
  },
  comments:[{
    user:{
      firstname:String,
      lastname:String,
      _id:String,
    },
    comment:{
      type:String,
      maxlength:1000,
      required:true
    }
  }],
});

module.exports = mongoose.model('posts', PostSchema);