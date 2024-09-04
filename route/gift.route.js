const express=require('express');
const GiftModel=require('../model/gift.model');


const giftRouter=express.Router();

giftRouter.post('/create-gifts',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const gift=new GiftModel({
            title,price,rating,description,image
        })

        await gift.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

giftRouter.get('/get-gifts',async(req,res)=>{
    try {
        const gift=await GiftModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",gift
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

giftRouter.get('/get-gift/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const gift=await GiftModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",gift
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=giftRouter