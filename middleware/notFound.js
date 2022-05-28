const notFound=(req,res,next)=>{
res.status(404).json({msg:"File not found"})
}

module.exports=notFound