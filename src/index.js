import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


global.jQuery = jQuery
global.jquery = jQuery // jquery lowercase  was the solution
global.$ = jQuery
let Bootstrap = require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
