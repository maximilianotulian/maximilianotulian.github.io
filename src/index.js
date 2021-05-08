import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'react-vertical-timeline-component/style.min.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import countModel from './models/model'

const store = init({
  models: {
    countModel,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
