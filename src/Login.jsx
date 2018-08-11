import React,{Component} from 'react';
import {Form,Col,FormGroup,FormControl,Button,Checkbox,ControlLabel} from 'react-bootstrap';
import fire from './config/fire';

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
  <Form horizontal style={{position:'fixed', top:'30%',left:'40%', width:'500px'}}>
      <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
       Email
      </Col>
      <Col sm={10}>
      <FormControl value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" />
      </Col>
   </FormGroup>

   <FormGroup controlId="formHorizontalPassword">
     <Col componentClass={ControlLabel} sm={2}>
       Password
     </Col>
     <Col sm={10}>
     <FormControl value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
     </Col>
    </FormGroup>

   <FormGroup>
    <Col smOffset={2} sm={10}>
    <Button type="submit" onClick={this.login}>Sign in</Button>
    <Button type="submit" onClick={this.signup} style={{marginLeft:'25px'}}>SignUp</Button>
    </Col>
    
    </FormGroup>

   
   </Form>
        )
    }

}