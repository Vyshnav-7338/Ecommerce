const express = require("express");
const Product = require("../models/productModel");
const data = require("../data");
const User = require("../models/userModel");

const seedRoute = express.Router();

seedRoute.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createUser = await User.insertMany(data.users);
  res.send({ createUser, createProducts });
});

module.exports = seedRoute;
