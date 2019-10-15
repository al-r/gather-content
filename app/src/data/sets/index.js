const initialState = [
  {
    workoutId: 1,
    repCount: 12
  },
  {
    workoutId: 1,
    repCount: 12
  },
  {
    workoutId: 1,
    repCount: 12
  },
  {
    workoutId: 1,
    repCount: 12
  },
  {
    workoutId: 1,
    repCount: 10
  },
];

const sets = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state.reduce((acc, currentValue, currentIndex)=>{
        if(action.payload.index === currentIndex) {
          if(currentValue.repCount < 12) {
            return {
              ...currentValue,
              repCount: currentValue.repCount++
            };
          } else {
            return {
              ...currentValue,
              repCount: 0
            };
          }
        }
      });
    default:
      return state;
  }
};

export default sets;
