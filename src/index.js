import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom';

if (window.location.hostname.indexOf('github.io') >= 0) {
    ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
} else {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
