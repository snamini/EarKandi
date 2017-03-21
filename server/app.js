const express = require('express');
const morgan = require('morgan');
const path = require('path');
var mongoose = require('mongoose');
const app = express();
var User =require('../models/User');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

mongoose.connect('mongodb://localhost/creatington');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.get('/portfolio', (req, res) => {
   // postUser();
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.get('/Community', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/portfolio', function(req, res){
   console.log("saving in server");
   console.log(req.body);
   //this will work only with google
  User.create({"email": req.body.email, "name":  given_name, "password": "pass1" }, function(err){
    if(err){
      console.log(err);
      res.send("mongo error")
    }
    else {
      res.send("Saved ");
    }
  })
});


module.exports = app;




