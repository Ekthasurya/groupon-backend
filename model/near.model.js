const mongoose=require('mongoose');

const nearSchema=new mongoose.Schema({
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

const NearModel=mongoose.model('near',nearSchema)

module.exports=NearModel