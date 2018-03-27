const express = require('express')
const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user = require('./controllers/user')
const router = express.Router()

//首页路由
router
    .get('/', index.showIndex)
    //用户路由
router    
    .get('/signin', user.showSignin)
    .post('/signin', user.signin)
    .get('/signup', user.showSignup)
    .post('/signup', user.signup)
    .post('/signout', user.signout)
    // 话题路由
router
    .get('/topic/create', topic.showCreate)
    .post('/topic/create', topic.create)
    .get('/topic/:topicID', topic.show)
    .get('/topic/:topicID/edit', topic.showEdit)
    .post('/topic/:topicID/edit', topic.edit)
    .post('/topic/:topicID/delete',topic.delete)



module.exports = router