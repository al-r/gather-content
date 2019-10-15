module.exports = function(app) {
  var workoutActions = require('../actions/workoutActions');

  app.route('/workouts')
    .get(workoutActions.getAllWorkouts)
    .post(workoutActions.createWorkout);

  app.route('/workouts/:exerciseId')
    .get(workoutActions.getWorkoutsByExercise);

  app.route('/workout/:workoutId')
    .get(workoutActions.getWorkout)
    .put(workoutActions.updateWorkout)
    .delete(workoutActions.deleteWorkout);
};
