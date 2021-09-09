const express = require('express')
const app = express()
const port = 3000


const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shiblasharif:poly123@cluster0.03srr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        console.log("db connection error");
    }
    else
    {
        console.log("db connected");
    }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
});
app.post('/search',async(req,res) =>{
    console.log(req.body)
    res.send('get search!') 
    const dataFromDb=await client
    .db("muchiii")
    .collection("soogle-data")
    .findOne({keyword:req.body.search_key})
    res.json(dataFrontDb)
})
app.get('/', (req, res) => {
    client.db("muchiii").collection("blllllaahh").insertOne({key:"value"});
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
