'use strict'
const fruitsModel = require('./../models/CRUDModel')

const getData = async (req, res) => {
    fruitsModel.find({}).then(ele => {
        res.send(ele)
    })
}

const createData = async (req, res) => {
    const dataCreate = req.body
    const newData = new fruitsModel(dataCreate)
    newData.save()
    fruitsModel.find({}).then(ele => {
        res.send(ele)
    })
}

const deleteData = async (req, res) => {
    let id = req.params.id
    fruitsModel.findByIdAndDelete(id).then(() => {
        fruitsModel.find({}).then(ele => {
            res.send(ele)
        })

    })

}

const updateData = async (req, res) => {
    let id = req.params.id
    let  dataCreate = req.body
    fruitsModel.findOne({id:id}).then(async(ele)=>{
        ele.name=dataCreate.name,
        ele.image=dataCreate.image,
        ele.price=dataCreate.price
        await ele.save()
       await fruitsModel.find({}).then(ele => {
            res.send(ele)
        })
    })
}

module.exports = { getData, createData, deleteData, updateData }