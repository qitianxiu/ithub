const express=require('express')
const app=express()
const router=require('./router')

app.use(router)
app.listen(3000,()=>console.log('running 3000...'))