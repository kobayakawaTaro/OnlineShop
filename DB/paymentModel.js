const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    method:{
        type:String,
        required:true,
        enum:{
            values:['bank transfer', 'e-wallet', 'credit/debit card'],
            message:v=>`${v} is not a valid payment method`
        }
    },
    timestamps:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('payment', paymentSchema)