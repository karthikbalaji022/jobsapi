require('dotenv').config();
const jwt=require('jsonwebtoken');

async function authenticate(req,res,next){
    const tokenAuth=req.headers.authoriation;
    if(!tokenAuth || !tokenAuth.startsWith("Bearer" )){
        res.status(404).json({msg:"No token present"})
    }else{
        try{
        const decode=jwt.verify(tokenAuth.split(' ')[1],process.env.JWT_TOKEN);
        req.user=decode.name;
        next()
        }catch(e){
            res.status(404).json({msg:"Invalid token"})
        }
   }
}

module.exports=authenticate