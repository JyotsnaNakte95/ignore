var express= require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');

var app=express();

const route = require('./route/route');

//to make connection
mongoose.connect('mongodb://localhost:27017/shoppinglist');
//on connection
mongoose.connection.on('connected',()=>{
  console.log('Mongodb connected at port 27017');
});

mongoose.connection.on('error',(err)=>{
  console.log(err);
});

const PORT = 3000;
//middlewares for pipelining

app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);


app.get('/',(req,res)=>{
  res.send('My name is Jyotsna Namdeo Nakte');
})
app.listen(PORT,()=>{
  console.log('Server has been connected at port:'+PORT);
});
