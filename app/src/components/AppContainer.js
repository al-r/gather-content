import React from 'react';
import {connect} from 'react-redux';

//Components
import Workout from './Workout.js';

const AppContainer = ({workouts}) => {
    return (
        <div className="container">
            <ul>
                {workouts.map( (workout) => {
                    return <Workout workout={workout} />
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.workouts
    }
}

export default connect(mapStateToProps, null)(AppContainer);