const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req,res) =>{
    try{
        const {username,email,password} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:"User already exists 😡😡😡"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.status(201).json({message:"User created successfully ✅😊👍"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server error 😡😡😡"});
    }
}

exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"User not found 😡😡😡"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials 😡😡😡"});
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        res.status(200).json({message:"Login successful ✅😊👍",token,user});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server error 😡😡😡"});
    }
}   