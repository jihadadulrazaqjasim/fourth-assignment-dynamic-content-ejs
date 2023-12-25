//packages
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

//local files
const usersRoutes = require('./routes/users')
const homeRoute = require('./routes/home')

//parse body
app.use(bodyParser.urlencoded({extended:false}))

//serving from public
app.use(express.static(path.join(__dirname,'public')))

//get routes
app.use(usersRoutes.routes)
app.use(homeRoute)

//set template engine
app.set('view engine','ejs')
app.set('views','views')

app.listen(3000,()=>{console.log('Server started on port 3000')})