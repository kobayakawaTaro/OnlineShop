const userModel = require('../DB/userModel')
require('express-async-errors')

const createUser = async (name,email,password,role)=>{
    console.log(password)
    const newUser = await userModel.create({name,email,password,role})
    return newUser
}

const patchUser = async (arg)=>{
    const {id} = arg
    const update = {}
    const options = ['name','password','address','cartID']
    for (propName in arg){
        if(options.includes(propName) && arg[propName]){
            if(propName == 'password'){
                if(arg[propName].length<6)
                    throw new badRequestError('password must be at least 6 characters long')
                const salt = await bcrypt.genSalt(10)
                arg['password'] = await bcrypt.hash(arg['password'],salt);
            }
            update[`${propName}`] = arg[propName]
        }
    }
    const patchedUser = await userModel.findByIdAndUpdate(id,update,{
        new:true,
        runValidators:true
    })
    return patchedUser
}

const findOne = async (obj)=>{
    const findUser = await userModel.findOne(obj)
    return obj
}

module.exports = {createUser,patchUser,findOne}