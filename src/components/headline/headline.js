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
            <div className="headline">
                <div className = "squareLogo"/>
                <div className="logo-burger" onClick={() => this.setState({isShowedSidebar : !this.state.isShowedSidebar})} />
                {this.state.isShowedSidebar ? <Sidebar /> : null}
            </div>
        )
    }
}

export default Headline