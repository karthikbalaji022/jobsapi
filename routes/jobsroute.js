const express=require('express')
const jobRouter=express.Router();
const {getAllUser,getUser,createUser,deleteUser,updateUser}=require('../controller/jobs')

jobRouter.route('/').get(getAllUser).post(createUser);
jobRouter.route('/:id').get(getUser).post(deleteUser).patch(updateUser)

module.exports=jobRouter