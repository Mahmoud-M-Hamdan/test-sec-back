const express=require('express')
const cors=require('cors')
require('dotenv').config()

const server=express()
server.use(cors())
server.use(express.json())
const mongoose=require('mongoose')
const PORT=process.env.PORT
const MONGOOSE_SERVER=process.env.MONGOOSE_SERVER

server.listen(PORT,()=>{
    console.log(`I am working on ${PORT}`)
})

server.get('/',(req,res)=>{
    res.send('ايش يا بطة')
})