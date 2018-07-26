const express = require('express');
const  router  =express.Router();
const User = require('../models/User');
const authUser = require('../auth/authUser');
const Post = require('../models/Post');


//@route GET /api/users
//@acess Test
//@desc Get all users from db

router.get('/api/users', async (req,res)=>{
    const users = await User.find().select('-password');
    res.json(users)
});


//@route GET /api/users/:id
//@acess Current user
//@desc Get current user data from db

router.get('/api/users/:id', async (req,res)=>{
    try {

      const user =  User.findById(req.params.id);
      const posts =  Post.find({user:req.params.id});

      const data  = await Promise.all([user, posts]);
      console.log(data);

      if(!data[0]) return res.status(404).send('user not found');
      res.json(data);
    }catch (err) {
      if(err) res.status(404).send('user not found');
    }
});

//@route DELETE /api/users
//@acess Current user
//@desc Delete current user data from db

router.delete('/api/users', authUser, async (req,res)=>{
    try{
      //istrinam User
      await User.findByIdAndRemove(req.user._id);
      //istrinam visus jo sukurtus Posts
      await Post.deleteMany({user:req.user._id})
      res.json({message:`User ${req.user.email} deleted`})
    }catch (err) {
      console.log(err);
      res.status(404).json({message:'user not found'})
    }
});

module.exports = router;