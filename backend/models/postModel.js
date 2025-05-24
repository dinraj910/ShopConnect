const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        text: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    content:{
        type: String,
        required: true
    },
    image: String,
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments:[commentSchema],

},
{timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);
