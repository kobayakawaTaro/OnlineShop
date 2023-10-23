const orderModel = require('../DB/orderModel')
const productModel = require('../DB/productModel')

const { StatusCodes } = require('http-status-codes')
const errors = require('../errors/customAPIError')

const getOrder = async (req, res, next) => {
    let {orderId,userId} = req.params
    let orderlist
    if(req.user.role.toLowerCase()=='admin'){
        if(orderId)
            orderlist = await orderModel.find({ _id:orderId })
        else if(userId)
            orderlist = await orderModel.find({ user:userId })
    } else if(req.user.role.toLowerCase()=='user'){
        if(orderId)
            orderlist = await orderModel.find({ _id:orderId, user: req.user.id })
        else
            orderlist = await orderModel.find({ user: req.user.id })
    }
    if (!orderlist)
        return res.status(StatusCodes.NOT_FOUND).json({'msg': 'order not found' })

    res.status(StatusCodes.OK).json({'nbhits': orderlist.length,orderlist})
}

const postOrder = async (req, res, next) => {
    const {products}= req.body
    let newOrder
    let prodTemp = []
    for(obj of products){
        const searchProduct = await productModel.findById(obj.id)
        if(searchProduct)
            prodTemp.push(obj)
    }
    console.log(prodTemp)
    
    if(req.user.role.toLowerCase()!='user')
        throw new errors.unauthorizedError('only users can post orders')
    
    newOrder = await orderModel.create({user:req.user.id,products:prodTemp, status:['to pay']})
    res.status(StatusCodes.CREATED).json(newOrder)
};

const patchOrder = async (req, res, next) => {
    const {status} = req.body
    const id = req.params.id
    if(req.user.role.toLowerCase()!='admin')
        throw new errors.unauthorizedError('only admins can update orders')

    const updatedOrder = await orderModel.findByIdAndUpdate(id,{$push:{statusHistory:{status:status}}}, {
        new:true,
        runValidators:true
    })
    res.status(StatusCodes.OK).json(updatedOrder)
};

const deleteOrder = async (req, res, next) => {
    if(req.user.role.toLowerCase()!='admin')
        throw new errors.unauthorizedError('only admins can delete orders')
    const deletedOrder = await orderModel.findByIdAndDelete(req.params.id)
    res.status(StatusCodes.OK).json(deletedOrder)
};

module.exports = { getOrder, postOrder, patchOrder, deleteOrder }