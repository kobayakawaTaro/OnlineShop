const auth = (req,res,next)=>{
    console.log("auth middleware running");
    const token = req.headers.authorization;
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    console.log(userData);
    res.user = userData;
    next();
}

module.exports = auth;