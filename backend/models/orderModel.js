const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderItems:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            name: String,
            quantity: Number,
            price: Number,
            image: String
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    paidAt: Date,
    isDelivered: {
        type: Boolean,
        default: false
    },
    deliveredAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);