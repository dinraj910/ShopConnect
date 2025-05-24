const User = require("../models/userModel");

exports.toogleFollow = async(req,res)=>{
    const {id: targetUserId} = req.params;
    const currentUserId = req.user._id;

    if(targetUserId === currentUserId) {
        return res.status(400).json({message:"You can't follow yourself 😅😅😅"});
    }

    try{

        const targetUser = await User.findById(targetUserId);
        const currentUser = await User.findById(currentUserId);

        if(!targetUser || !currentUser){
            return res.status(404).json({message:"User not found 😡😡😡"});
        }

        const isFollowing = currentUser.following.includes(targetUserId);

        if(isFollowing){
            // Unfollow

            currentUser.following.pull(targetUserId);
            targetUser.followers.pull(currentUserId);

            await currentUser.save();
            await targetUser.save();

            res.status(200).json({message:"User unfollowed successfully 🔕😊👍"});

        }else{
            // Follow

            currentUser.following.push(targetUserId);
            targetUser.followers.push(currentUserId);

            currentUser.save();
            targetUser.save();

            res.status(200).json({message:"User followed successfully 🔔😊👍"});
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while following user❌"});
    }
}