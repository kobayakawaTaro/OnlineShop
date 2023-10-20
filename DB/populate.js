require('dotenv').config()
const mongoose = require('mongoose')
const productModel = require('./productModel')
const productData = require('./productData')

console.log(productData[0])

const populateData = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        await productModel.deleteMany()
        await productModel.create(productData)
        console.log('done')
        process.exit(0)
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

populateData()