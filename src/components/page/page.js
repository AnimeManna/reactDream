import React from 'react'
import Home from '../home/home.js'
import Sidebar from '../sidebar/sidebar'

export default class Page extends React.Component{

    render(){
        return(
            <div className="page">
                {this.props.sidebarStatus ? <Sidebar /> : null}
                <Home/>
            </div>
        )
    }
}