var mongoose = require('mongoose');
var Sets = mongoose.model('Sets');

exports.getAllSets = function(req, res) {
  Sets.find({},
    function(error, sets) {
      if (error)
        res.send(error);

      res.json(sets);
    }
  );
};

exports.getSetsByWorkout = function(req, res) {
  Sets.find(
    { workoutId: req.params.workoutId },
    function(error, sets) {
      if (error)
        res.send(error);

      res.json(sets);
    }
  );
};

exports.getSet = function(req, res) {
  Sets.findById(
    req.params.setId,
    function(error, set) {
      if (error)
        res.send(error);

      res.json(set);
    }
  );
};

exports.updateSet = function(req, res) {
  Sets.findOneAndUpdate(
    { _id: req.params.setId },
    req.body,
    { new: true },
    function (error, set) {
      if (error)
        res.send(error);

      res.json(set);
    }
  )
};

exports.createSet = function(req, res) {
  var newSet = new Sets(req.body);
  newSet.save(function(error, set) {
    if (error)
      res.send(error);

    res.json(set);
  });
};

exports.deleteSet = function(req, res) {
  Sets.remove(
    { _id: req.params.setId },
    function(error, set) {
      if (error)
        res.send(error);

      res.json({ message: 'Set was successfully deleted' });
    }
  );
};
