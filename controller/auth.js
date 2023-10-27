const {StatusCodes} = require("http-status-codes")
const userModel = require("../DB/userModel")
const userService = require('../service/user')
const cartModel = require("../DB/cartModel")
const cartService = require('../service/cart')
const {badRequestError, unauthorizedError} = require("../errors/customAPIError.js")
require("express-async-errors")

const register = async (req,res,next)=>{
    let {name,email,password,role} = req.body
    if(password && password.length<6)
        throw new badRequestError('password must be at least 6 characters long')

    const newUser = await userService.createUser(name,email,password,role)
    const newCart = await cartService.createCart(newUser._id)

    const updated = await userService.patchUser({id:newUser._id,cartID:newCart._id})
    console.log(updated)

    const token = newUser.createToken()
    res.status(StatusCodes.OK).json({user:newUser._id, token})
}

const login = async (req,res,next)=>{
    const {email,password}=req.body;
    const loggedUser = await userModel.findOne({email})
    
    if(!loggedUser)
    throw new unauthorizedError("User not registered")

    const isMatch = await loggedUser.checkPass(password)
    if(isMatch==false)
        throw new unauthorizedError("User not registered or incorrect passwords")

    const token = loggedUser.createToken()
    res.status(200).json({user:loggedUser._id,token})
}

module.exports = {login,register}