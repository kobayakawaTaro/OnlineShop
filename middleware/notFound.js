const {StatusCodes} = require("http-status-codes");

const notFound = (req,res,next)=>{
    res.status(StatusCodes.NOT_FOUND).json({"msg":`requester resource:${req.method} ${req.url} not found`});
}

module.exports = notFound;