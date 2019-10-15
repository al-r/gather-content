import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

//Components
import RepCounter from './RepCounter.js';

const Workout = ({workout, sets}) => {
    return (
        <li className="workout" key={workout.id}>
            <h2>Workout Name {workout.exerciseId}</h2>
            <div>5x12 50kg</div>
            <ul className="rep-counter-list">
                {sets.map( (set) => {
                    return <RepCounter set={set} />;
                })}
            </ul>
        </li>
    );
}

// Workout.propTypes = {
//     workout: PropTypes.object
// }

const mapStateToProps = (state, ownProps) => {
    return {
        sets: state.sets
    }
}

export default connect(mapStateToProps, null)(Workout);