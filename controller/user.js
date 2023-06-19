const fs = require('fs');
const model = require('../model/user')
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const User = model.User;
// Create
exports.createUser= async(req, res) => {
  const user  = new User(req.body);


let result=  user.save((err,user)=>{
    console.log({err,user})
    if(err){
      res.status(400).json(err);
    } else{
      res.status(201).json(user);
    }
  })

  // result=result.toObject();
  // delete result.password();
  // res.send(result);
};
// get all users data
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// get  users data by specific Id
exports.getUser = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const user = await User.findById(id);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await User.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await User.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};