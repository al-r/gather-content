var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Workout = require('./src/models/workoutModel');
var Exercises = require('./src/models/exerciseModel');
var Sets = require('./src/models/setModel');
var workoutRoutes = require('./src/routes/workoutRoutes');
var exerciseRoutes = require('./src/routes/exerciseRoutes');
var setRoutes = require('./src/routes/setRoutes');

var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/frontendpairingexericserdb', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

workoutRoutes(app);
exerciseRoutes(app);
setRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('api started on :' + port);
