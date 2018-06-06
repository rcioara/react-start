import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App1 title="My app" />, document.getElementById('root'));
registerServiceWorker();
