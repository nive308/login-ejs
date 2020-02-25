const express = require('express')
const ejs = require('ejs')
const app = express()
const ejsLint = require('ejs-lint')

app.use(express.static("views"))

app.set('view engine','ejs')
app.set("views", "./views");

const port = 3000

const setupDB = require('./config/database')
const router = require('./config/routes')


let parser = require('body-parser')
app.use(express.json())
setupDB()

app.use(parser.json())

app.get('/index', function(req, res) {
  res.render('index')
})

app.use('/', router)
app.get('/login',function(req,res){
     res.render('login')
    // res.render("login", null, null, (err, html) => {res.send(html)})
     console.log('user accessing form page')
 })

app.post('/login',function(req,res){
    const window=window.alert('successfully loggedIn')
    let user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email:req.body.email
    }
    console.log(user)
    res.render('form',{
        userValue : user,
        topicHead : 'User Form'
    })
    res.json(user)   
})


app.listen(port, () => {
    console.log('listening on port', port)
})

