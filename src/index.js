import './styles/main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js'


ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();