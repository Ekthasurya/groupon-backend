const express=require('express');
const TravelModel=require('../model/travel.model');


const travelRouter=express.Router();

travelRouter.post('/create-travels',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const travel=new TravelModel({
            title,price,rating,description,image
        })

        await travel.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

travelRouter.get('/get-travels',async(req,res)=>{
    try {
        const travel=await TravelModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",travel
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

travelRouter.get('/get-travel/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const travel=await TravelModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",travel
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=travelRouter