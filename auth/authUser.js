const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  if(!req.headers.authorization) return res.status(400).json({message:'missing token'});


  const token = req.headers.authorization.split(' ')[1];
  try{

    req.user = jwt.verify(token, process.env.JWT_KEY);
    next();
  }catch (err) {
    return  res.status(401).json({message:'unauthoorized'})
  }

};

