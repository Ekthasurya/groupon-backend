const mongoose=require('mongoose');

const travelSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    versionKey:false
})

const TravelModel=mongoose.model('travel',travelSchema)

module.exports=TravelModel