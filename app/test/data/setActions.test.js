import * as actions from '../../src/data/sets/actions';
import * as types from '../../src/data/sets/types';
import * as axios from "axios";
import configureStore from 'redux-mock-store';

jest.mock("axios");

const baseUrl = 'http://localhost:3000/';
const set = {
    _id: "5c74db08e7c80d7b2b372a7d",
    workoutId: "5c74db08e7c80d7b2b372a7c",
    __v: 0,
    repCount: 20
};
const sets = [set];
let resp;

const mockStore = configureStore();
const store = mockStore(sets);

describe('Sets endpoint', () => {
    test('load sets', ()=> {
        resp = {data: sets};
        axios.get.mockResolvedValue(resp);
        var loadSets = store.dispatch(actions.loadSets());

        return expect(loadSets).toEqual(sets);
    });
})