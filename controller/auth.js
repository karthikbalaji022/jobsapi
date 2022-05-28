require('dotenv').config();
const authDb=require('../model/user');
const login=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
    throw "Please enter valid credentials"
    const user=await authDb.findOne({email:email});
    if(!user)
    throw "user not found";
    const correctPass=await user.comparePassword(password);
    if(!correctPass)
    throw "invalid credentials";
    const token=user.jwtToken();
    res.status(200).json({msg:"login successfull",token:token});
}

const register=async (req,res)=>{
    const data=await authDb.create({...req.body});
    const token=data.jwtToken();
    res.status(200).json({user:data.name,token:token});
}

module.exports={login,register}