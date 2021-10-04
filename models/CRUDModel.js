'use strict'
const mongoose = require('mongoose')


const fruitsSchema= mongoose.Schema({
    name:String,
    image:String,
    price:String,
})


const fruitsModel=mongoose.model('fruitscollection',fruitsSchema)


module.exports=fruitsModel