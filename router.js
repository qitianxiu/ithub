const express=require('express')
const router=express.Router()
router
    .get('/',(req,res)=>{
        res.send('渲染首页')
    })



    module.exports=router