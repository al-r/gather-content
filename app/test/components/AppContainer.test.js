import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ConnectedAppContainer, {AppContainer} from '../../src/components/AppContainer.js';
// import {Workout} from '../../src/components/Workout.js';
import configureStore from 'redux-mock-store';
// import {loadExercises} from '../../src/data/exercises/actions.js';
// import {loadWorkouts} from '../../src/data/workouts/actions.js';
// import {loadSets} from '../../src/data/sets/actions.js';
// import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    workouts: [{
        _id: '1',
        exerciseId: '1',
        status: 'IN_PROGRESS',
    }],
    exercises: [{
        _id: '1',
        name: 'Press ups',
        numberOfSets: 5,
        targetReps: 12,
    }],
}
const mockStore = configureStore();
let store, wrapper, component;

describe('AppContainer',()=>{
    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><ConnectedAppContainer /></Provider> );
        component = wrapper.find(ConnectedAppContainer);
    })

    it('renders component', () => {
        expect(component.length).toEqual(1);
    });
})