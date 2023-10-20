const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    'name':{
        type:String,
        required:true,
        maxlength:100
    },
    'price':{
        type:Number,
        required:true,
        min:0
    },
    'images':{
        type:[String]
    },
    'category':{
        type:String,
        required:true,
        enum:{
            values:['Electronics','Clothing','Home Appliance','Beauty','Sports','Books'],
            message: value =>`${value} is not a valid category`
        }
    },
    'condition':{
        type:String,
        required:true,
        enum:{
            values:['New','Pre-owned','Preorder'],
            message:value=>`${value} is not a valid condition`
        }
    },
    'stock':{
        type:Number,
        default:0,
        min:0
    },
    'variation':[{
        'name':{
            'type':String,
            'required':true
        },
        'values':[{
            'name':{
                'type':String,
                'required':true
            },
            'stock':{
                'type':Number,
                'required':true
            }
        }]
    }],
    'rating':{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    'sold':{
        type:Number,
        default:0
    }
})

const productModel = mongoose.model('product',productSchema)
module.exports = productModel