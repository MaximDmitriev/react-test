import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/es";

ReactDOM.render(<App />, document.getElementById('root'));
