const express = require("express");
const Product = require("../models/productModel");
const data = require("../data");

const seedRoute =express.Router()

seedRoute.get('/',async(req,res)=>{
    await Product.deleteMany({})
    const createProducts=await Product.insertMany(data.products)
    res.send({createProducts})
})

module.exports =seedRoute;