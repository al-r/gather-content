import React from 'react';
import {connect} from 'react-redux';
import {createWorkout} from './../data/workouts/actions.js';
import {loadSets} from './../data/sets/actions.js';

//Components
import Workout from './Workout.js';

const AppContainer = (props) => {
    return (
        <div className="container">
            <ul className="tabs">
                <li className="tabs__item" role="button">Plan</li>
                <li className="tabs__item tabs__item--selected" role="button">Train</li>
            </ul>
            <select onChange={(e)=>addWorkout(props, e.target.value)}>
                <option>+ New Workout</option>
                {props.exercises ? props.exercises.map( (exercise, index) => {
                    return <option key={index} value={exercise._id}>{exercise.name}</option>
                }) : ''}
            </select>
            <ul className="workout-group">
                {props.exercises ? props.exercises.map( (exercise) => {
                    return props.workouts ? props.workouts.filter(workout => {
                            return workout.exerciseId == exercise._id;
                        }).map( (workout, index) => {
                            return <Workout exercise={exercise} workout={workout} key={index} />
                        }) : '';
                }) : ''}
            </ul>
        </div>
    );
}

const addWorkout = (props, exerciseId) => {
    props.createWorkout(exerciseId);
    setTimeout(()=>{
        props.loadSets();
    }, 20);
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts.workouts,
        exercises: state.exercises.exercises
    }
}

export default connect(mapStateToProps, {createWorkout, loadSets})(AppContainer);