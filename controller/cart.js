const cartModel = require('../DB/cartModel')
const errors = require('../errors/customAPIError')
const productModel = require('../DB/productModel')
const {StatusCodes} = require('http-status-codes')

const getCart = async (req,res,next)=>{
    const userCart = await cartModel.find({ 'user': req.user.id })
    if (!userCart)
        throw new errors.unauthorizedError('not logged in')
    res.status(StatusCodes.OK).json(userCart)
}

const patchCart = async (req,res,next)=>{
    let updatedCart = await cartModel.findOne({'user':req.user.id})

    let {push,pull} = req.body

    if(push){
        for(const obj of push){
            if(!updatedCart.products.some((e)=>e['id']==obj.id)){
                const product = await productModel.findById(obj.id)
                if(product)
                    updatedCart.products.push(obj)
            }
            else{
                const idx = updatedCart.products.findIndex((e)=>e.id==obj.id)
                updatedCart.products[idx].quantity+=obj.quantity
            }
        }
    }
    
    if(pull){
        pull.forEach((e)=>{
            const idx = updatedCart.products.findIndex((i)=>i.id==e.id)
            if(idx!=-1){
                if(updatedCart.products[idx].quantity-e.quantity <=0){
                    updatedCart.products = updatedCart.products.filter((i)=>!i.id==e.id) 
                }else{
                    updatedCart.products[idx].quantity-=e.quantity
                }
            }
        })
    }
    await updatedCart.save()
    res.status(StatusCodes.OK).json(updatedCart)
}

module.exports = {getCart,patchCart}