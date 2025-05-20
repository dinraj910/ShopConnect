const express = require('express');
const router = express.Router();
const {createProduct,getAllProducts,getProductById} = require('../controllers/productController');
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

router.post("/",protect,createProduct);
router.get("/",getAllProducts);
router.get("/:id",getProductById);

// Upload image
router.post("/upload", protect, upload.single("image"), (req, res) => {
  console.log("file?", req.file); // Add this to debug 🔥

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded 🫠" });
  }

  res.status(200).json({
    imageUrl: req.file.path,
    public_id: req.file.filename
  });
});


module.exports = router;