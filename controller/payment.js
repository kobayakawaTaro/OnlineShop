const paymentModel = require('../DB/paymentModel')
const orderModel = require('../DB/orderModel')
const userModel = require('../DB/userModel')
const errors = require('../errors/customAPIError')
const {StatusCodes} = require('http-status-codes')

const postPayment = async (req,res,next)=>{
    const {orderId,method} = req.body
    const user = await userModel.findById(req.user.id)
    const order = await orderModel.findById(orderId)

    if(!user || !order){
        throw new errors.notFoundError('user or order not found')
    }

    if(order.invoice.paid == true)
        return res.status(StatusCodes.OK).json({"msg":"invoice has been paid"})
    if(user.balance<order.invoice.amount)
        throw new errors.paymentError('insufficient balance')

    user.balance -=order.invoice.amount
    order.invoice.paid = true
    order.statusHistory.push({status:'to ship',timestamp:Date.now()})
    
    const payment = await paymentModel.create({orderId:order._id,userId:user._id, method})
    await user.save()
    await order.save()

    res.status(StatusCodes.CREATED).json(payment)
}

module.exports = {postPayment}