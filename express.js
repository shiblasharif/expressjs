const express = require('express')
const app = express()
const port = 3000


const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/submit',(req,res) =>{
    res.send('get submit!')
})
app.post('/submit',(req,res) =>{
    console.log(req.body);
    console.log(req.body.username);
    res.send('get submit!')
})
app.get('/login',(req,res) =>{
    res.send('get login!')
})
app.get('/signup',(req,res) =>{
    res.send('get signup!')
})
app.get('/forget',(req,res) =>{
    res.send('get forget!')
})
app.get('/logout',(req,res) =>{
    res.send('get logout!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
