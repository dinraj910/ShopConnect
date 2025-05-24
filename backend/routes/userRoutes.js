const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware'); // ✅ FIXED
const {toogleFollow} = require("../controllers/userController");

// @route GET /api/user/profile
// @desc Get logged in user profile
// @access Private
router.get("/profile", protect, async (req, res) => {
  res.status(200).json({
    message: "User profile fetched successfully ✅😊👍",
    user: req.user
  });
});

router.put("/:id/follow",protect,toogleFollow);

module.exports = router;
