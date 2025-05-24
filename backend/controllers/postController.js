const Post = require("../models/postModel");

exports.createPost = async (req,res)=>{
    const {content,image} = req.body;

    try{
        const post = await Post.create({
            user: req.user._id,
            content,
            image
        });

        res.status(201).json({message:"Post created successfully ✅😊👍",post});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while creating post ❌"});
    }
    
};

exports.getFeed = async (req,res)=>{
    try{
        const posts = await Post.find().populate("user","username")
        .populate("comments.user","username")
        .sort({createdAt: -1});

        res.status(200).json({message:"Posts fetched successfully ✅😊👍",posts});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while fetching posts ❌"});
    }
};

exports.likePost = async (req,res)=>{
    const postId = req.params.id;
    const userId = req.user._id;

    try{
        const post = await Post.findById(postId);

        if(!post){
            return res.status(404).json({message:"Post not found 😡😡😡"});
        }

        const alreadyLiked = post.likes.includes(userId);

        if(alreadyLiked){
            post.likes = post.likes.filter((id)=>id.toString() !== userId.toString());  
            await post.save();
            return res.status(200).json({message:"Post unliked successfully ✅😊👍"});
        }else{
            post.likes.push(userId);
            await post.save();
            return res.status(200).json({message:"Post liked ❤️ successfully ✅😊👍"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while liking post ❌"});
    }
}

exports.commentOnPost = async (req, res) => {
  const postId = req.params.id;
  const { text } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = {
      user: req.user._id,
      text
    };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json({ message: "Comment added 💬", comment: newComment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add comment" });
  }
};
