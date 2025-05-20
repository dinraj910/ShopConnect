const Order = require("../models/orderModel");

exports.createOrder = async (req,res)=>{
    const {orderItems,totalPrice} = req.body;

    if(!orderItems || !totalPrice){
        return res.status(400).json({message:"Order items and total price are required 😡😡😡"});
    }

    try{
        const order = new Order({
            user: req.user._id,
            orderItems,
            totalPrice
        });

        const savedOrder = await order.save();

        res.status(201).json({message:"Order created successfully ✅😊👍",order:savedOrder});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while creating order ❌"});
    }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};