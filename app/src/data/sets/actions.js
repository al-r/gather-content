import axios from 'axios';
import * as types from './types';

const url = "http://localhost:3000/";

export function loadSets () {
    return (dispatch) => {
        axios.get(`${url}sets`)
        .then((res) => {
            let sets = res.data
            dispatch(types.setsLoad(sets))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export function deleteSet(setId) {
    return (dispatch) => {
        dispatch(types.setDelete(setId));
        axios.delete(`${url}set/${setId}`)
        .then((response) => {
        })
        .catch((err) => {
            console.error.bind(err);
        })
    }
};

export function updateSet(set) {
    return (dispatch) => {
        axios.put(`${url}set/${set._id}`, set)
        .then((response) => {
            let newSet = response.data;
            dispatch(types.setUpdate(newSet));
        })
        .catch((err) => {
            console.error.bind(err);
        })
    }
}