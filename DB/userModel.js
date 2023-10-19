require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'please provide name'],
        maxlength:[25,'name is too long'],
        trim: true
    },
    email:{
        type: String,
        required: [true,'please provide email'],
        unique: true,
        match:[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'please provide a valid email format']
    },
    password:{
        type: String,
        required: [true,'please provide password'],
    },
    address:{
        type: String,
    },
    cartID:{
        type:String
    },
    order:[{
        type:String
        // type:[mongoose.Schema.Types.ObjectId],
        // ref:'order'
    }],
    balance:{
        type: Number,
        default:0
    }
})

const hashPass = ()=>{
    
}

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.createToken = function(){
    return jwt.sign({id:this._id,name:this.name},process.env.JWT_SECRET,{expiresIn:"1d"})
}

userSchema.methods.checkPass = async function(pass){
    const match = await bcrypt.compare(pass,this.password)
    return match
}

const userModel = mongoose.model("user", userSchema)
userModel.createIndexes()

module.exports = userModel