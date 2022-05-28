const {mongoose } = require('mongoose')
const connect=require('mongoose')
const connectDb=(url)=>{
    return mongoose.connect(url,console.log("database connected"));
}

module.exports=connect;