var mongoose = require('mongoose');
var Workout = mongoose.model('Workouts');
var Exercise = mongoose.model('Exercises');
var Set = mongoose.model('Sets');

exports.getAllWorkouts = function(req, res) {
  Workout.find({},
    function(error, workouts) {
      if (error)
        res.send(error);

      res.json(workouts);
    }
  );
};

exports.getWorkout = function(req, res) {
  Workout.findById(
    req.params.workoutId,
    function(error, workout) {
      if (error)
        res.send(error);

      res.json(workout);
    }
  );
};

exports.updateWorkout = function(req, res) {
  Workout.findOneAndUpdate(
    { _id: req.params.workoutId },
    req.body,
    { new: true },
    function (error, workout) {
      if (error)
        res.send(error);

      res.json(workout);
    }
  )
};

exports.createWorkout = function(req, res) {
  var newWorkout = new Workout(req.body);

  newWorkout.save(function(error, workout) {
    if (error) res.send(error);
    
    Exercise.findById(
      req.body.exerciseId,
      function(error, exercise) {
        for (var i = 0; i < exercise.numberOfSets; i++) {
          var newSet = new Set({ workoutId: workout._id });
          newSet.save(function(error, set) {
            if (error) res.send(error);
          });
        }
      }
    );

    res.json(workout);
  });
};

exports.deleteWorkout = function(req, res) {
  Workout.remove(
    { _id: req.params.workoutId },
    function(error, workout) {
      if (error)
        res.send(error);

      res.json({ message: 'Workout was successfully deleted' });
    }
  );
};

exports.getWorkoutsByExercise = function(req, res) {
  Workout.find(
    { exerciseId: req.params.exerciseId },
    function(error, workouts) {
      if (error)
        res.send(error);

      res.json(workouts);
    }
  );
};