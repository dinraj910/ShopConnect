const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/authMiddleware");
const {createPost,getFeed,commentOnPost,likePost} = require("../controllers/postController");

// Create Post
router.post("/",protect,createPost);
// Get Feed
router.get("/",protect,getFeed);
// Comment on post
router.post("/:id/comment",protect,commentOnPost);
// Like post
router.put("/:id/like",protect,likePost);

module.exports = router;
