var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
  name: {
    type: String,
    required: 'name is required to create an exercise'
  },
  numberOfSets: {
    type: Number,
    required: 'numberOfSets are required to create an exercise'
  },
  targetReps: {
    type: Number,
    required: 'numberOfReps are required to create an exercise'
  }
});

module.exports = mongoose.model('Exercises', ExerciseSchema);
