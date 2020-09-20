import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './css/images/logo2.jpg';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phone:'',
            address:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        if(window.confirm('Are you sure to register on serve humanity?'))
        event.preventDefault();
        axios.post('http://localhost:3000/api/users/register', this.state)
            .then((res) => {
                this.props.history.push('/')
                  
            }).catch(err => console.log(err.response.data))
    }

    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="main-content bg-success text-center">
                        <div class="col-md-4 text-center company_info">
                            <span class="company_logo"><h2><img src={logo} class="fa fa-android"></img></h2></span>
                            <h4 class="company_title">Serve Humanity</h4>
                        </div>
                        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div class="container-fluid">
                            <div class="row">
                                <h2>Register</h2>
                            </div>
                            <h1>Hello Beautiful Soul !</h1>
                                <p class="description">Join Us to Contribute Little what you can that will save <b>MILLIONS</b> life</p>
                                    
                            <div class="row">
                                <Form  class="form-example" >               	
                                    
                                    <FormGroup class="form-group">
                                    <div class="row">
                                        <Input type='text' class="form_input" name='firstName' id='firstName'
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleChange} />
                                    </div>
                                    </FormGroup>
                                    <FormGroup class="form-group">
                                        <div class="row">
                                            <Input type='text' placeholder="Last Name" class="form_input" name='lastName' id='lastName'
                                                value={this.state.lastName}
                                                onChange={this.handleChange} />
                                        </div>
                                    </FormGroup>
                                    <FormGroup class="form-group">
                                    <div class="row">
                                        <Input type='text' name='address' class="form_input" placeholder="Address" id='address'
                                            value={this.state.address}
                                            onChange={this.handleChange} />
                                    </div>
                                    </FormGroup>
                                    <FormGroup class="form-group">
                                        <div class="row">
                                            <Input type='text' name='phone' class="form_input" placeholder="Phone Number" id='phone'
                                            value={this.state.phone}
                                            onChange={this.handleChange} />
                                        </div>
                                    </FormGroup>
                                    <FormGroup class="form-group">
                                    <div class="row">
                                        <Input type='text' name='username' class="form_input" placeholder="Username" id='username'
                                            value={this.state.username}
                                            onChange={this.handleChange} />
                                    </div>
                                    </FormGroup>
                                    <FormGroup class="form-group ">
                                        <div class="row">
                                            <Input type='password' name='password' class="form_input" placeholder="Password" id='password'
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                        </div>
                                    </FormGroup>
                                    <Button  color="primary" class="btn btn-primary btn-customized" onClick={this.handleSubmit}>Submit</Button>
                                    <Button  color='danger' onClick={() => this.props.history.push('/')}>Cancel</Button>
                                    
                                </Form>                                
                                
                            </div>
                            <p class="copyright">Already Joined? <Link to='./Login' >Login</Link></p>
                        
                    </div>
                </div>
            </div>
                </div>
            </div>   
            )
    }
}
