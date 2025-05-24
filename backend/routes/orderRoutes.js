const express = require("express");
const router = express.Router();
const { protect, isAdmin } = require("../middlewares/authMiddleware");
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  markAsPaid,
  markAsDelivered
} = require("../controllers/orderController");

router.post("/", protect, createOrder);               // Create order
router.get("/my", protect, getMyOrders);              // Get user orders

// ADMIN ROUTES
router.get("/", protect, isAdmin, getAllOrders);      // All orders (admin)
router.get("/:id", protect, isAdmin, getOrderById);   // Get order by ID
router.put("/:id/pay", protect, isAdmin, markAsPaid); // Mark as paid
router.put("/:id/deliver", protect, isAdmin, markAsDelivered); // Mark as delivered

module.exports = router;
