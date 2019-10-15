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
    case 'LOAD_SETS' :
        return {
            ...state,
            sets: action.sets
        }
    case 'DELETE_SET':
        let arr = state.sets.filter((set) => {
          return (set._id !== action.setId);
        });
        return {
          ...state,
          sets: arr
        }
    case 'UPDATE_SET':
      let updatedSets = state.sets.map(set=>{
        if(set._id===action.set._id) {
          return action.set;
        } else {
          return set;
        }
      });
      return {
        ...state,
        sets: updatedSets
      }
    default:
      return state;
  }
};

export default sets;
