const mongoose=require('mongoose')
const jobsSchema=new mongoose.Schema({
company:{
    type:String,
    required:[true,"PLease enter company name"]
},
role:{
    type:String,
    required:[true,"PLease enter role"],
    maxlength:100
},status:{
    type:String,
    enum:["Interview","Rejected","Selected","Phone round","Pending"],
    default:"Pending"
},
createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true,"Enter created by"]
}
},{timestamps:true})

module.exports=mongoose.model("JobsModel",jobsSchema);