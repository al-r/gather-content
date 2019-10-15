import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';
import configureStore from './data/configureStore';

//Components
import AppContainer from './components/AppContainer.js';

const App = () => (
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>
);

ReactDom.render(
  <App />,
  document.getElementById('main')
);
