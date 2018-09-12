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
                <IFrame 
                   width="1450" 
                   height="950" 
                   frameborder="0" 
                   scrolling="no" 
                   url="https://onedrive.live.com/embed?resid=A6761850755F02BE%21105&authkey=%21AHcO0v0iXOxcijE&em=2&wdAllowInteractivity=False&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></IFrame>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}