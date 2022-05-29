const express=require('express')
const jobRouter=express.Router();
const {getAllJobs,getJob,createJob,deleteJob,updateJob}=require('../controller/jobs')

jobRouter.route('/create').post(createJob);
jobRouter.route('/').get(getAllJobs);
jobRouter.route('/:id').get(getJob).post(deleteJob).patch(updateJob)

module.exports=jobRouter