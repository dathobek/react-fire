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
                <button onClick={this.logout}>logout</button>
                <IFrame 
                   width="1450" 
                   height="950" 
                   frameborder="0" 
                   scrolling="no" 
                   url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnJgAD6dYZPr4t8wStkJRL3bPL2bc_iDjDq3TmdJKv4WFbwrk6divMB8ieQsdY9KMMMd6m--X8Z2r5/pubhtml?widget=true&amp;headers=false"></IFrame>
                
            </div>
        )
    }
}