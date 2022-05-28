const errorHandle=(req,res,next)=>{
    res.status(400).json({msg:"something went wrong buddy!!"});

}

module.exports=errorHandle