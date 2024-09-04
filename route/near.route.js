const express=require('express');
const NearModel=require('../model/near.model');


const nearRouter=express.Router();

nearRouter.post('/create-nears',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const near=new NearModel({
            title,price,rating,description,image
        })

        await near.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

nearRouter.get('/get-nears',async(req,res)=>{
    try {
        const near=await NearModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",near
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

nearRouter.get('/get-near/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const near=await NearModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",near
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=nearRouter