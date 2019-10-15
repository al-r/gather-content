module.exports = function(app) {
  var exerciseActions = require('../actions/exerciseActions');

  app.route('/exercises')
    .get(exerciseActions.getAllExercises)
    .post(exerciseActions.createExercise);

  app.route('/exercise/:exerciseId')
    .get(exerciseActions.getExercise)
    .put(exerciseActions.updateExercise)
    .delete(exerciseActions.deleteExercise);
};
