const express=require('express');
const HomeModel=require('../model/home.model');


const homeRouter=express.Router();

homeRouter.post('/create-homes',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const home=new HomeModel({
            title,price,rating,description,image
        })

        await home.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

homeRouter.get('/get-homes',async(req,res)=>{
    try {
        const home=await HomeModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",home
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

homeRouter.get('/get-home/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const home=await HomeModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",home
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=homeRouter