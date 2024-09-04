const mongoose=require('mongoose');

const thingSchema=new mongoose.Schema({
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

const ThingModel=mongoose.model('thing',thingSchema)

module.exports=ThingModel