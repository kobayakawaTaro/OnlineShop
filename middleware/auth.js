require('dotenv').config()
const jwt = require('jsonwebtoken')
const errors = require('../errors/customAPIError')

const auth = (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new errors.unauthorizedError('token is not provided')
    }

    const token = authHeader.split(' ')[1]
    try{
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        req.user = userData
        next()
    }catch(e){
        console.log(token)
        throw new errors.unauthorizedError(e.message)//('invalid token or not authorized')
    }
}

module.exports = auth;