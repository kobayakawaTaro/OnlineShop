const {customAPIError} = require("./customAPIError.js");

const customErrorHandler = (err,req,res,next)=>{
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({"msg":err.message});
    }
    res.status(500).json({"msg":err.message});
}

module.exports = customErrorHandler;