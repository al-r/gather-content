var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  exerciseId: {
    type: Schema.Types.ObjectId,
    required: 'The exerciseId is required to create a workout'
  },
  status: {
    type: String,
    enum: ['COMPLETE', 'IN_PROGRESS', null],
    default: null
  }
});

module.exports = mongoose.model('Workouts', WorkoutSchema);
