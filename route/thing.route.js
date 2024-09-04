const express=require('express');
const ThingModel=require('../model/thing.model');


const thingRouter=express.Router();

thingRouter.post('/create-things',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const thing=new ThingModel({
            title,price,rating,description,image
        })

        await thing.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

thingRouter.get('/get-things',async(req,res)=>{
    try {
        const thing=await ThingModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",thing
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

thingRouter.get('/get-thing/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const thing=await ThingModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",thing
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=thingRouter