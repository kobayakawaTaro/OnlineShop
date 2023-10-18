const logger = (req,res,next)=>{
    console.log(`user requested ${req.method} ${req.url}`);
    next();
}

module.exports = logger;