'use strict';
var mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost/creatington');
// var db = mongoose.connection;

// db.on('error', function (err) {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
//   console.log('Mongoose connection successful.');
// });

// app.get('/Login', function(req, res){
//    console.log(" Hey from server login page");
// });





app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});