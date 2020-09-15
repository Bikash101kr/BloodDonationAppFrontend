import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';




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
            
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input type='text' name='username' id='username'
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type='password' name='password' id='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button block color="primary">Login</Button>
                </Form>
                <hr/>
               
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
