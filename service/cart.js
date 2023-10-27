const cartModel = require('../DB/cartModel')

const createCart = async (id)=>{
    const newCart = await cartModel.create({'user':id})
    return newCart
}

module.exports = {createCart}