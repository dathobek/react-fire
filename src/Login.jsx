import React,{Component} from 'react';
import fire from './config/fire';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
           email:'',
           password:''

        }
    }

    handleChange(){
        this.setState({ [e.target.name] : e.target.value})
    }
    render(){
        return(
            <div className="col-md-6">
             <form>
               <div class="form-group">
               <label For="">Email address</label>
               
               </div>

             </form>
            
            </div>
        )
    }

}