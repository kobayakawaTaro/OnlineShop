const mongoose = require("mongoose");

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
        required: [true,'please provide password']
    },
    address:{
        type: String,
    },
    cart:{
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
});

const userModel = mongoose.model("user", userSchema);
userModel.createIndexes();

module.exports = userModel;