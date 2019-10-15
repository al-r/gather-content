import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSet} from './../data/sets/actions.js';

const RepCounter = (props) => {
    return (
        <li>
            <button className="rep-counter" onClick={()=>incrementRepCounter(props)}>{props.set.repCount}</button>
        </li>
    );
}

const incrementRepCounter = (props) => {
    if(props.set.repCount<props.target){
        ++props.set.repCount;
    } else {
        props.set.repCount=0;
    }

    props.updateSet(props.set);
}

RepCounter.propTypes = {
    set: PropTypes.object,
}

export default connect(null, {updateSet})(RepCounter);