import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteWorkout} from './../data/workouts/actions.js';
import {deleteSet} from './../data/sets/actions.js';

//Components
import RepCounter from './RepCounter.js';

const Workout = (props) => {
    return (
        <li className="workout">
            <h2 className="workout__title">{props.exercise.name}</h2>
            <div className="workout__settings">{props.exercise.numberOfSets}x{props.exercise.targetReps} 50kg</div>
            {props.workout.status!=='COMPLETE' ?
                <ul className="rep-counter-list">
                    {props.sets ? props.sets.filter((set) => {
                        return set.workoutId == props.workout._id;
                    }).map( (set, index) => {
                        return <RepCounter set={set} target={props.exercise.targetReps} key={index} />;
                    }) : []}
                </ul>
                : <p>Congrats! Lift 52.5kg next time.</p>
            }
            <button type="button" className="button button--delete" onClick={()=>deleteWorkoutAndRelationships(props, props.workout._id)}>x Delete</button>
        </li>
    );
}

const deleteWorkoutAndRelationships = (props, workoutId) => {
    props.sets.filter(set=>{
        return set.workoutId === workoutId;
    }).forEach((set)=>{
        props.deleteSet(set._id);
    });
    props.deleteWorkout(workoutId);
}

Workout.propTypes = {
    exercise: PropTypes.object,
    workout: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    return {
        sets: state.sets.sets
    }
}

export default connect(mapStateToProps, {deleteWorkout, deleteSet})(Workout);