const userModel = require('../DB/userModel')
const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcrypt')
const { badRequestError } = require('../errors/customAPIError')

const getUser = async (req,res,next)=>{
    const {id} = req.user
    let userdata = await userModel.findById(id).select('-password')
    res.status(StatusCodes.OK).json({userdata})
}

const patchUser = async (req,res,next)=>{
    const {id} = req.user
    const update = {}
    const options = ['name','password','address']
    for (propName in req.body){
        if(options.includes(propName) && req.body[propName]){
            if(propName == 'password'){
                if(req.body[propName].length<6)
                    throw new badRequestError('password must be at least 6 characters long')
                const salt = await bcrypt.genSalt(10)
                req.body['password'] = await bcrypt.hash(req.body['password'],salt);
            }
            update[`${propName}`] = req.body[propName]
        }
    }
    const patchedUser = await userModel.findByIdAndUpdate(id,update,{
        new:true,
        runValidators:true
    })
    res.status(200).json(patchedUser)
}

const deleteUser = async (req,res,next)=>{
    const {id} = req.user
    const deletedUser = await userModel.findByIdAndDelete(id) 
    res.status(200).json({deletedUser})
}

module.exports = {getUser,patchUser,deleteUser}

