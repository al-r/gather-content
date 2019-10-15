import React, {PropTypes} from 'react';

const RepCounter = ({set}) => {
    return (
        <li key={set.workoutId}>
            <button className="rep-counter">{set.repCount}</button>
        </li>
    );
}

// RepCounter.propTypes = {
//     workout: PropTypes.object
// }

export default RepCounter;