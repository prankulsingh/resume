import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from "./Router";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageRouter/>, document.getElementById('root'));
registerServiceWorker();