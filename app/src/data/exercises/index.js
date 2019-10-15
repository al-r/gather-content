const initialState = [
  {
    id: 1,
    name: 'Press ups',
    numberOfSets: 5,
    targetReps: 12,
  },
];

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_EXERCISES' :
        return {
            ...state,
            exercises: action.exercises
        }
    default:
      return state;
  }
};

export default exercises;
