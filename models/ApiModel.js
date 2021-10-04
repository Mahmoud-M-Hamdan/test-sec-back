'use strict'


class ApiModel{
    constructor(data){
        this.name=data.name,
        this.image=data.image,
        this.price=data.price
    }
}

module.exports=ApiModel