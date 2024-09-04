const dotenv=require('dotenv').config()
const express=require('express');
const cors=require('cors')
const connection = require('./config/db')
const userRouter = require("./route/user.route")
const nearRouter = require("./route/near.route")
const giftRouter =require("./route/gift.route");
const beautyRouter = require('./route/beauty.route');
const thingRouter = require('./route/thing.route');
const homeRouter = require('./route/home.route');
const foodRouter = require('./route/food.route');
const goodRouter = require('./route/good.route');
const travelRouter = require('./route/travel.route');


const server=express();
server.use(cors({
    origin:'*'
}))

server.use(express.json())

const PORT=process.env.PORT || 5004;

server.use('/user',userRouter)
server.use('/near',nearRouter)
server.use('/gift',giftRouter)
server.use('/beauty',beautyRouter)
server.use('/thing',thingRouter)
server.use('/home',homeRouter)
server.use('/food',foodRouter)
server.use('/good',goodRouter)
server.use('/travel',travelRouter)


server.get('/', (req,res)=>{
    res.send("Server is running fine")
})


server.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Server is running at PORT ${PORT} and database is also connected `)
    } catch (error) {
        console.log(`Error while conneting to server or database ${error}`)
    }
})

