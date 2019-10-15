var mongoose = require('mongoose');
var Exercise = mongoose.model('Exercises');

exports.getAllExercises = function(req, res) {
  Exercise.find({},
    function(error, exercise) {
      if (error)
        res.send(error);

      res.json(exercise);
    }
  );
};

exports.getExercise = function(req, res) {
  Exercise.findById(
    req.params.exerciseId,
    function(error, exercise) {
      if (error)
        res.send(error);

      res.json(exercise);
    }
  );
};

exports.updateExercise = function(req, res) {
  Exercise.findOneAndUpdate(
    { _id: req.params.exerciseId },
    req.body,
    { new: true },
    function (error, exercise) {
      if (error)
        res.send(error);

      res.json(exercise);
    }
  )
};

exports.createExercise = function(req, res) {
  var newExercise = new Exercise(req.body);
  newExercise.save(function(error, exercise) {
    if (error)
      res.send(error);

    res.json(exercise);
  });
};

exports.deleteExercise = function(req, res) {
  Exercise.remove(
    { _id: req.params.exerciseId },
    function(error, exercise) {
      if (error)
        res.send(error);

      res.json({ message: 'Exercise was successfully deleted' });
    }
  );
};
