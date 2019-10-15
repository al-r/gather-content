import axios from 'axios';

const url = "http://localhost:3000/";
export function loadExercises () {
    return (dispatch) => {
        axios.get(`${url}exercises`)
        .then((res) => {
            let exercises = res.data
            dispatch({type:'LOAD_EXERCISES', exercises})
        }).catch((err) => {
            console.log(err)
        })
    }
}