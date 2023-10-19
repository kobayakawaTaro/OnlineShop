const {StatusCodes} = require("http-status-codes");
const userModel = require("../DB/userModel.js");
const {notFoundError, badRequestError, unauthorizedError} = require("../errors/customAPIError.js");
require("express-async-errors");

const register = async (req,res,next)=>{
    let {name,email,password} = req.body;
    if(password.length<6)
        throw new badRequestError('password must be at least 6 characters long')

    const newUser = await userModel.create({name,email,password});
    const token = newUser.createToken();
    res.status(StatusCodes.OK).json({user:newUser._id, token});
}

const login = async (req,res,next)=>{
    const {email,password}=req.body;
    const loggedUser = await userModel.findOne({email});

    if(!loggedUser)
        throw new unauthorizedError("User not registered");

    const isMatch = await loggedUser.checkPass(password);
    if(!isMatch)
        throw new unauthorizedError("User not registered or incorrect passwords");

    const token = loggedUser.createToken();
    res.status(200).json({user:loggedUser._id,token});
}

module.exports = {login,register};