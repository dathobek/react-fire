import React,{Component} from 'react';
import fire from './config/fire';
import IFrame from 'react-iframe';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);

    }

    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>HEy you are home</h1>
                <IFrame url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnJgAD6dYZPr4t8wStkJRL3bPL2bc_iDjDq3TmdJKv4WFbwrk6divMB8ieQsdY9KMMMd6m--X8Z2r5/pubhtml?widget=true&amp;headers=false"
                width="1450px"
                height="950px"
                display="initial"
                position="relative"
                allowFullScreen/>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}