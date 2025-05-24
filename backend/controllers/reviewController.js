const Product = require("../models/productModel");

exports.addReview = async (req,res)=>{
    const {rating,comment} = req.body;

    const productId = req.params.id;

    try{
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message:"Product not found 😡😡😡"});
        }

        const alreadyReviewd = product.reviews.find(review => review.user.toString() === req.user._id.toString());
        if(alreadyReviewd){
            return res.status(400).json({message:"You have already reviewed this product 😡😡😡"});
        }

        const newReview = {
            user:req.user._id,
            username: req.user.username,
            rating: Number(rating),
            comment
        };

        product.reviews.push(newReview);
        await product.save();   

        res.status(201).json({message:"Review added successfully ✅😊👍",review: newReview});
        

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Failed to add review 😡😡😡"});
    }
}