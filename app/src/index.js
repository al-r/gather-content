import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';
import configureStore from './data/configureStore';
import {loadExercises} from './data/exercises/actions.js';
import {loadWorkouts} from './data/workouts/actions.js';
import {loadSets} from './data/sets/actions.js';

//Components
import AppContainer from './components/AppContainer.js';

let store = configureStore();
store.dispatch(loadExercises());
store.dispatch(loadWorkouts());
store.dispatch(loadSets());

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDom.render(
  <App />,
  document.getElementById('main')
);
