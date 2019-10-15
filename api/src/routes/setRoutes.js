module.exports = function(app) {
  var setActions = require('../actions/setActions');

  app.route('/sets')
    .get(setActions.getAllSets)
    .post(setActions.createSet);

  app.route('/sets/:workoutId')
    .get(setActions.getSetsByWorkout);

  app.route('/set/:setId')
    .get(setActions.getSet)
    .put(setActions.updateSet)
    .delete(setActions.deleteSet);
};
