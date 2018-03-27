const express=require('express')
const router = require('./router')
const app=express()


app.engine('html', require('express-art-template'))


app.use(router)
app.listen(3000,()=>console.log('running 3000...'))