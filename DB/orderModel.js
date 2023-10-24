const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: {
        type: Number,
        min: 0,
      },
    },
  ],
  invoice:{
    amount:{
      type:Number,
      min:0
    },
    paid:{
      type:Boolean,
      default:false
    }
  },
  statusHistory: {
    type: [
      {
        status: {
          type: String,
          enum: {
            values: ['to pay', 'to ship', 'shipped', 'to review', 'reviewed'],
            message: (v) => `${v} is not a valid status`,
          },
        },
        timestamp: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    default: [{ status: "to pay", timestamp: Date.now() }],
  },
  tracking:{
    type:[{
      milestone:{
        type:String
      },
      timestamp:{
        type:Date,
        default:Date.now()
      }
    }],
  }
})

module.exports = mongoose.model("orders", orderSchema);
