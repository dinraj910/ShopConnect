const Product = require("../models/productModel");

// @desc    Create a product
// @route   POST /api/products
// @access  Admin

exports.createProduct = async (req,res)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({message:"You are not authorized to create a product 😤😤😤"});
    }

    const {name,description,price,category,stock,image} = req.body;

    try{
        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            image:{
                url: req.body.image.url,
                public_id: req.body.image.public_id
            },
            createdBy: req.user._id
        });

        const savedProduct = await product.save();

        res.status(201).json({message:"Product created successfully ✅😊👍",product:savedProduct});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while creating product ❌"});
    }

};

exports.getAllProducts = async (req,res)=>{
    const products = await Product.find({});
    res.status(200).json({message:"Products fetched successfully ✅😊👍",products});
};

exports.getProductById = async (req,res)=>{

    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found 😪😪😪"});
        }

        res.status(200).json({message:"Product fetched successfully ✅😊👍",product});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"❌Something went wrong while fetching product ❌"});
    }  
};