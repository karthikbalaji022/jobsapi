const getAllUser=async (req,res)=>{
    res.send("get all user")
}

const getUser=async (req,res)=>{
    res.send("get user")
}
const createUser=async (req,res)=>{
    res.send("create user")
}
const deleteUser=async (req,res)=>{
    res.send("delete user")
}
const updateUser=async (req,res)=>{
    res.send("update user")
}

module.exports={getAllUser,getUser,createUser,updateUser,deleteUser}
