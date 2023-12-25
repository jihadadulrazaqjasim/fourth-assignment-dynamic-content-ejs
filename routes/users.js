const express = require('express')
const router = express.Router()


const userList = []

router.get('/users',(req, res)=>{
  return res.render('users',{pageTitle:'Users',users:userList})
})

router.post('/users',(req, res)=>{
    const username = req.body.username
    userList.push({username:username})
    return res.redirect('/users')
})

exports.routes = router
exports.list = userList