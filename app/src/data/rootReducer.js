import { combineReducers } from 'redux';
import workoutsReducer from '../data/workouts';
import exercisesReducer from '../data/exercises';
import setsReducer from '../data/sets';

export default combineReducers({
  workouts: workoutsReducer,
  exercises: exercisesReducer,
  sets: setsReducer,
});
