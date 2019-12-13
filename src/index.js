import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Sample';
import Hello from './Parent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));

serviceWorker.unregister();
