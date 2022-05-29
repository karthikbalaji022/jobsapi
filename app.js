require('dotenv').config();
require('express-async-errors');
const express=require('express');
const app=express();
const {connect}=require('./db/connect');
const UserDb=require('./model/user');
const errorHandle=require('./middleware/errorHandle');
const notFound=require('./middleware/notFound');
const authRoute=require('./routes/authroute');
const jobsRoute=require('./routes/jobsroute');
const authenticate=require('./middleware/authentications');

app.use(express.json())


app.get('/',async (req,res)=>{

    console.log(data);res.status(200).json({msg:data})
});

app.use('/api/user',authRoute)

app.use('/api/user/jobs/',authenticate,jobsRoute);

app.use(errorHandle)
app.use(notFound)
const port=process.env.Port || 9000;
const start=async ()=>{
    try{
        await connect(process.env.MONGO_URI);
        app.listen(port,console.log("server is running"))
    }catch(e){
        console.log(e);
    }
}

start();