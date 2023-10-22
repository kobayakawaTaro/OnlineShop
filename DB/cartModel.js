const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    'user':{'type':mongoose.Schema.Types.ObjectId, 'required':true},
    'products':[{
        'id':{
            'type':String,//mongoose.Schema.Types.ObjectId, 
            'required':true
        },
        'quantity':{
            'type':Number,
            'required':true,
            'min':0,
            'default':1
        }
    }]
})

module.exports = mongoose.model('cart',cartSchema)