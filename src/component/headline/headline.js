import React from 'react'
import Sidebar from '../sidebar/sidebar.js'

class Headline extends React.Component{
    constructor(){
        super()
        this.state = {
            showedBlock:false
        }
    }

    render(){
        return(
            <div className="headline">
                <div className = "squareLogo"/>
                <div className="logo-burger" onClick={() => this.setState({showedBlock: true})} />
                {this.state.showedBlock ? <Sidebar /> : null}
            </div>
        )
    }
}

export default Headline