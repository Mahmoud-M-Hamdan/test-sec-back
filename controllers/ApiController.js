'use strict'
const axios=require('axios')
const ApiModel=require('./../models/ApiModel')



const getApiData=async(req,res)=>{
const url='https://fruit-api-301.herokuapp.com/getFruit'

await axios.get(url).then(ele=>{
const responseData=ele.data.fruits.map(item=>{
    return new ApiModel(item)
})
res.send(responseData)
})


}

module.exports=getApiData