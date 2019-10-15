import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedWorkout, {Workout} from '../../src/components/Workout.js';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    workout: {
        _id: '1',
        exerciseId: '1',
        status: 'IN_PROGRESS',
    },
    exercise: {
        _id: '1',
        name: 'Press ups',
        numberOfSets: 5,
        targetReps: 12,
    },
    sets: [{
        _id: "5c74db08e7c80d7b2b372a7d",
        workoutId: "5c74db08e7c80d7b2b372a7c",
        __v: 0,
        repCount: Math.floor(Math.random() * 20)
    }]
};
const mockStore = configureStore();
let store, wrapper, component;

describe('Workout',()=>{
    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><ConnectedWorkout exercise={initialState.exercise} workout={initialState.workout} /></Provider> );
        component = wrapper.find(ConnectedWorkout);
    })

    it('renders component', () => {
        expect(component.length).toEqual(1);
    });
})