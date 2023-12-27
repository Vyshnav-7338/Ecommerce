const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const expressAsyncHandler =require('express-async-handler')
const  generateToken  = require("../utils");
const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token:generateToken(user)
        });
        return;
      }
    }
    res.status(401).send({ message: "invalid email or password" });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name:req.body.name,
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password,10)
    })
    const user = await newUser.save()
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token:generateToken(user)
    });
  }))

module.exports=userRouter