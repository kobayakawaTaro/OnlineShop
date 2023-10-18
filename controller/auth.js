const {StatusCodes} = require("http-status-codes");

const register = async (req,res,next)=>{
    res.status(StatusCodes.OK).send("register page");
}

const login = async (req,res,next)=>{
    res.status(StatusCodes.OK).send("login page");
}

module.exports = {login,register};