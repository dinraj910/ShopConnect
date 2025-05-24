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

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "username email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "username email");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.markAsPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.isPaid = true;
    order.paidAt = new Date();

    const updated = await order.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Could not update payment status" });
  }
};

exports.markAsDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.isDelivered = true;
    order.deliveredAt = new Date();

    const updated = await order.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Could not update delivery status" });
  }
};