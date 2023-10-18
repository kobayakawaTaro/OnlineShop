const {StatusCodes} = require("http-status-codes");
const userModel = require("../DB/userModel.js");
const {notFoundError, badRequestError, notAuthorizedError} = require("../errors/customAPIError.js");
require("express-async-errors");

const register = async (req,res,next)=>{
    let {name,email,password} = req.body;
    const newUser = await userModel.create({name,email,password});
    res.status(StatusCodes.OK).json(newUser);
}

const login = async (req,res,next)=>{
    res.status(StatusCodes.OK).send("login page");
}

module.exports = {login,register};