import React from 'react'
import Sidebar from '../sidebar/sidebar.js'

class Headline extends React.Component{
    constructor(){
        super()
        this.state = {
            isShowedSidebar:false
        }
    }

    render(){
        return(
            <div className="header">
                <div className="headline">
                 <div className = "squareLogo"/>
                 <div className="logo-burger" onClick={() => this.setState({isShowedSidebar : !this.state.isShowedSidebar})} />
                </div>
                {this.state.isShowedSidebar ? <Sidebar /> : null}
            </div>
        )
    }
}

export default Headline