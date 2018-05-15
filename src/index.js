import './styles/main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import Page from './component/page/page.js'
import Headline from './component/headline/headline.js'


ReactDOM.render(
    <div>
        <Headline/>
        <Page/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();