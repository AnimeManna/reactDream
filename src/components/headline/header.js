import React from 'react'

class Header extends React.Component{;

    render(){

        return(
            <div className="header">
                <div className="headline">
                 <div className="logo-burger" onClick = {()=> {
                     let newState = !this.props.status;
                     this.props.changeParentState(newState);
                 }} />
                </div>
            </div>
        )
    }
}

export default Header