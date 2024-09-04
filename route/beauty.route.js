const express=require('express');
const BeautyModel=require('../model/beauty.model');


const beautyRouter=express.Router();

beautyRouter.post('/create-beauties',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const beauty=new BeautyModel({
            title,price,rating,description,image
        })

        await beauty.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

beautyRouter.get('/get-beauties',async(req,res)=>{
    try {
        const beauty=await BeautyModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",beauty
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

beautyRouter.get('/get-beauty/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const beauty=await BeautyModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",beauty
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=beautyRouter