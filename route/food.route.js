const express=require('express');
const FoodModel=require('../model/food.model');


const foodRouter=express.Router();

foodRouter.post('/create-foods',async(req,res)=>{
    try {
        const {title,price,rating,description,image}=req.body;
        const food=new FoodModel({
            title,price,rating,description,image
        })

        await food.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

foodRouter.get('/get-foods',async(req,res)=>{
    try {
        const food=await FoodModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",food
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

foodRouter.get('/get-food/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const food=await FoodModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",food
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=foodRouter