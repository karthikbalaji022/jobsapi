const jobs=require('../model/jobs');
const getAllJobs=async (req,res,next)=>{
    const {user:{user_id:id}}=req;
    const data=await jobs.find({createdBy:id}).sort('createdAt').catch((e)=>res.status(404).json({err:e})
    );
    res.status(200).json({user:req.user,data:data});

}
const createJob=async (req,res,next)=>{
    req.body.createdBy=req.user.user_id;
    await jobs.create({...req.body});
    const data=await jobs.find({})
    res.status(200).json(data)

}


const getJob=async (req,res)=>{
    const {user:{user_id:id},params:{id:getid}}=req;
    const jobsdata=await jobs.findOne({createdBy:id,_id:getid})
    if(!jobsdata)
    {
        res.status(404).json({msg:"No user found"});
    }
    res.status(200).json({jobsdata})
}
const deleteJob=async (req,res)=>{
    const {params:{id:id}}=req;
    const del=await jobs.findByIdAndDelete({_id:id}).catch(e=>console.log(e,"user not deleted"));
    if(!del)
        res.status(404).json({msg:"User not deleted"})
    res.status(200).json({msg:"delete user"})
}
const updateJob=async (req,res)=>{
    const {params:{id:id}}=req;
    const update=await jobs.findByIdAndUpdate({_id:id},{...req.body});
    if(!update)
    {
        res.status(404).json({msg:"User not found hence not updated"})
    }
    res.status(200).json({msg:"Successfully updated"})
}

module.exports={getAllJobs,getJob,createJob,updateJob,deleteJob}
