import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import logo from './css/images/logo2.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isBasic: false,
            isAdmin: false,
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/userdash/:id`)
      }
    })

        e.preventDefault();
        axios.post('http://localhost:3000/api/users/login', this.state)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token',res.data.token);
                let user = jwtDecode(res.data.token.split(' ')[1]);
                if (user.role === 'admin') this.setState({ isAdmin: true })
                else this.setState({ isBasic: true })
                return res.data;
            }).catch(err => console.log(err));
    }

    render() {
        if (this.state.isAdmin) {
            return <Redirect to='/admindash/:id' />
        } else if (this.state.isBasic) {
            return <Redirect to='/userdash/:id' />
        }
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
                                <h2>Log In</h2>
                            </div>
                            <h1>Hello Beautiful Soul !</h1>
                                <p class="description">Login to Contribute Little what you can that will save <b>MILLIONS</b> life</p>
                                    
                            <div class="row">
                                <Form onSubmit={this.handleSubmit} class="form-example" >               	
                                    
                                    <FormGroup class="form-group">
                                    <div class="row">
                                        <Input type='text' class="form_input" name='username' id='username'
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleChange} />
                                    </div>
                                    </FormGroup>
                                    <FormGroup class="form-group">
                                        <div class="row">
                                            <Input type='password' class="form_input" name='password' id='password'
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange} />
                                        </div>
                                    </FormGroup>
                                    <Button  color="primary" class="btn btn-primary btn-customized">Login</Button>
                                
                                    <p class="copyright">Don't have an account? <Link to='./Register' >Register Here</Link></p>
                                </Form>
                            </div>
                        
                    </div>
                </div>
            </div>
                </div>
            </div>   
           )
    }
}
const login = user => {
    return axios
      .post('users/login', {
        username: user.username,
        password: user.password
      })
      .then(res => {
        localStorage.setItem('usertoken', res.data.token)
        //console.log(res)
        return res.data
      })
      .catch(err => {
        console.log('Invalid username and password, ' + err)
      })
  }
