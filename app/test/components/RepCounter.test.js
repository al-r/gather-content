import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedRepCounter, {RepCounter} from '../../src/components/RepCounter.js';

Enzyme.configure({ adapter: new Adapter() });

const set = {
    _id: "5c74db08e7c80d7b2b372a7d",
    workoutId: "5c74db08e7c80d7b2b372a7c",
    __v: 0,
    repCount: Math.floor(Math.random() * 20)
};
const mockStore = configureStore();
let store, wrapper, component;
const target = 10;

describe('RepCounter',()=>{
    beforeEach(()=>{
        store = mockStore(set);
        wrapper = mount( <Provider store={store}><ConnectedRepCounter set={set} target={target} /></Provider> );
        component = wrapper.find(ConnectedRepCounter);
    })

    it('renders component', () => {
        expect(component.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(component.prop('set')).toEqual(set);
        expect(component.prop('target')).toEqual(target);
     });

    it('set contains', () => {
        expect(set).toMatchObject({
            _id: expect.any(String),
            workoutId: expect.any(String),
            repCount: expect.any(Number)
        });
    });
})