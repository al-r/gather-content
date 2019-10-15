const initialState = [
  {
    id: 1,
    exerciseId: 1,
    status: 'IN_PROGRESS',
  },
];

const workouts = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_WORKOUTS' :
        return {
            ...state,
            workouts: action.workouts
        }
    case 'CREATE_WORKOUT' :
        return {
            ...state,
            workouts: [action.workout].concat(state.workouts)
        }
    case 'DELETE_WORKOUT':
        let arr = state.workouts.filter((workout) => {
          return (workout._id !== action.workoutId);
        });
        return {
          ...state,
          workouts: arr
        }
    default:
      return state;
  }
};

export default workouts;
