import React from 'react';

import Headline from '../headline/headline.js'
import Page from '../page/page.js'

export default class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Headline/>
                <Page/>
            </div>
        )
    }
}