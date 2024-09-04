const express=require('express');
const GoodModel=require('../model/good.model');


const goodRouter=express.Router();

goodRouter.post('/create-goods',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const good=new GoodModel({
            title,price,rating,description,image
        })

        await good.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

goodRouter.get('/get-goods',async(req,res)=>{
    try {
        const good=await GoodModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",good
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

goodRouter.get('/get-good/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const good=await GoodModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",good
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=goodRouter