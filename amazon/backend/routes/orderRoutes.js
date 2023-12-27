const express = require("express");
const Order = require("../models/OrderModel");
const expressAsyncHandler =require('express-async-handler')
const isAuth = require("../isAuth");
const orderRouter = express.Router();

orderRouter.post('/',isAuth, expressAsyncHandler(async(req,res)=>{
    const neworder =new Order({
        orderItems:req.body.orderItems.map((x)=>({...x,product: x._id})),
        shippingAddress:req.body.shippingAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id

    })

const order = await neworder.save()
res.status(201).send({message:'New Order Created',order})
}))

module.exports=orderRouter