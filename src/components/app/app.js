import React from 'react'
import Headline from '../headline/headline.js'
import Page from '../page/page.js'

export default class App extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            isShowedSidebar: false
        }
    }

    changeState(sidebarStat){
        this.setState({isShowedSidebar:sidebarStat})
    }


    render(){
        return(
            <div className="app">
                <Headline changeParentState = {(status)=> {
                    this.changeState(status)
                }} status = {
                    this.state.isShowedSidebar
                }
                />
                <Page sidebarStatus ={
                    this.state.isShowedSidebar
                } />
            </div>
        )
    }
}