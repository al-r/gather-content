import axios from 'axios';

const url = "http://localhost:3000/";

const workoutCreate = (workout) => ({type: 'CREATE_WORKOUT', workout});
const workoutDelete = (workoutId) => ({type: 'DELETE_WORKOUT', workoutId});

export function loadWorkouts () {
    return (dispatch) => {
        axios.get(`${url}workouts`)
        .then((res) => {
            let workouts = res.data
            dispatch({type:'LOAD_WORKOUTS', workouts})
        }).catch((err) => {
            console.log(err)
        })
    }
}

export function createWorkout (exerciseId, status = null) {
    return (dispatch) => {
        axios.post(`${url}workouts`, {exerciseId: exerciseId, status: status})
        .then((response) => {
            let workout = response.data;
            dispatch(workoutCreate(workout));
        })
        .catch((err) => {
            console.error.bind(err);
        })
    }
  };

export function deleteWorkout(workoutId) {
    return (dispatch) => {
        dispatch(workoutDelete(workoutId));
        axios.delete(`${url}workout/${workoutId}`)
            .then((response) => {
            })
            .catch((err) => {
                console.error.bind(err);
            })
    }
};