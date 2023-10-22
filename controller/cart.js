const cartModel = require('../DB/cartModel')
const {StatusCodes} = require('http-status-codes')

const getCart = async (req,res,next)=>{
    const userCart = await cartModel.find({'user':req.user.id})
    res.status(StatusCodes.OK).json(userCart)
}

const patchCart = async (req,res,next)=>{
    let updatedCart = await cartModel.findOne({'user':req.user.id})
    let {push,pull} = req.body

    if(push){
        push.forEach((obj)=>{
            if(!updatedCart.products.some((e)=>e['products']==obj.products)){
                updatedCart.products.push(obj)
            }
            else{
                const idx = updatedCart.products.findIndex((e)=>e.products==obj.products)
                updatedCart.products[idx].quantity+=obj.quantity
            }
        })
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