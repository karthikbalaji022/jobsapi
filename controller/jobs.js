const jobs=require('../model/jobs');
const getAllJobs=async (req,res,next)=>{
    const {user:{user_id:id}}=req;
    console.log("get all jobs",id);
    try{
    const data=await jobs.find({createdBy:id}).sort('createdAt');
    res.status(200).json({user:req.user,data:data});
    }catch(e){
        res.status(404).json({err:e})
    }
}
const createJob=async (req,res,next)=>{
    console.log("create users")
    
    req.body.createdBy=req.user.user_id;
    await jobs.create({...req.body});
    const data=await jobs.find({})
    res.status(200).json(data)

}


const getJob=async (req,res)=>{
    console.log("get users")
    const {user:{user_id:id},params:{id:getid}}=req;
    const jobsdata=await jobs.findOne({createdBy:id,_id:getid})
    if(!jobsdata)
    {
        res.status(404).json({msg:"No user found"});
    }
    res.status(200).json({jobsdata})
}
const deleteJob=async (req,res)=>{
    console.log("delete users")

    res.send("delete user")
}
const updateJob=async (req,res)=>{
    console.log("update users")

    res.send("update user")
}

module.exports={getAllJobs,getJob,createJob,updateJob,deleteJob}
