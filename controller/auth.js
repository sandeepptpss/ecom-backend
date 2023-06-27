const fs = require('fs');
const model = require('../model/user')
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const User = model.User;
// Create


exports.Login= async (req, res) => {

  if(req.body.password  && req.body.email){
    let users = await User.findOne(req.body).select("-password");
   if(users){
  res.send(users)
    }else{
      res.send('User is not found')
    }
  }
 
}