import React,{Component} from 'react';
import {Form,Col,FormGroup,FormControl,Button,ControlLabel} from 'react-bootstrap';
import fire from './config/fire';
import './Login.css';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
           email:'',
           password:''

        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
        }).catch((error)=>{
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }
    render(){
        return(

            <div class="login-form-container" id="login-form">
            <div class="login-form-content">
                <div class="login-form-header">
                    <div class="logo">
                        <img src="data:image/jpeg;base64,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"/>
                    </div>
                    <h2>Login</h2>
                </div>
                <form method="post" action="" class="login-form">
                    <div class="input-container">
                        <i class="fa fa-envelope"></i>
                        <input type="email" class="input" name="email" placeholder="Email"/>
                    </div>
                    <div class="input-container">
                        <i class="fa fa-lock"></i>
                        <input type="password"  id="login-password" class="input" name="password" placeholder="Password"/>
                        <i id="show-password" class="fa fa-eye"></i>
                    </div>
                    
                    <input type="submit" name="login" value="Login" class="button"/>
                    <a href="#" class="register">Register</a>
                </form>
                <div class="separator">
                        <span class="separator-text">KPI</span>
                </div>
                
            </div>
        </div>



      
//   <Form horizontal style={{position:'fixed', top:'20%',left:'29%', width:'400px'}}>
//       <FormGroup controlId="formHorizontalEmail">
//       <Col componentClass={ControlLabel} sm={2}>
//        Email
//       </Col>
//       <Col sm={10}>
//       <FormControl value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" />
//       </Col>
//    </FormGroup>

//    <FormGroup controlId="formHorizontalPassword">
//      <Col componentClass={ControlLabel} sm={2}>
//        Password
//      </Col>
//      <Col sm={10}>
//      <FormControl value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
//      </Col>
//     </FormGroup>

//    <FormGroup>
//     <Col smOffset={2} sm={10}>
//     <Button type="submit" onClick={this.login}>Sign in</Button>
//     <Button type="submit" onClick={this.signup} style={{marginLeft:'25px'}}>SignUp</Button>
//     </Col>
    
//     </FormGroup>

   
//    </Form>
  
         )
    }

}