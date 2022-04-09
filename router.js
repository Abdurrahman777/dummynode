const express= require("express")
const router=express.Router()
const{ getcontroller, postcontroller, getspecific, deletecontroller, updatecontroller, paggination }=require('./controller')


router.get('/user',getcontroller)
router.post('/user',postcontroller)
router.get('/users',getspecific)
router.get('/deleteuser',deletecontroller)
router.put('/updateuser',updatecontroller)
router.post('/paggination',paggination)  

module.exports=router