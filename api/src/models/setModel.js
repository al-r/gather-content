var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SetSchema = new Schema({
  workoutId: {
    type: Schema.Types.ObjectId,
    required: 'workoutId is required to create a set'
  },
  repCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Sets', SetSchema);
