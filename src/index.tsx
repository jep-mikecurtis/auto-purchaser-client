import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import {RouterComponent} from "./router";
import { store } from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
