import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import './index.css';
import BingAdsApp from './bingads/bingadsapp.js';
import registerServiceWorker from './registerServiceWorker';

global.jQuery = jQuery;
global.jquery = jQuery; // jquery lowercase  was the solution
global.$ = jQuery;
require('bootstrap');

ReactDOM.render(<BingAdsApp />, document.getElementById('root'));
registerServiceWorker();
