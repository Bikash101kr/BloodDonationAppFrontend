import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import NavBarAdmin from '../NavBarAdmin'
export default class AdminAddBloodBank extends Component{

   constructor(props) {
        super(props)

        this.state = {
            BloodBankName: '',
            availableBloodGroup:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        }, ( ) => console.log(this.state))
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(window.confirm('Are you sure to add this blood bank on the list?'))
        axios.post('http://localhost:3000/api/BloodBank', this.state,this.state.config)
            .then((res) => {
                this.props.history.push('/admindashboard/adminbloodbanks')
            }).catch(err => console.log(err.response.data))
    }
    render(){
        return(
            <div>
                <NavBarAdmin history = {this.props.history} />
            
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="BloodBankName">Blood Bank Name</Label>
                    <Input type='text' name='BloodBankName' id='BloodBankName'
                    value ={this.state.BloodBankName}
                    onChange={this.handleChange}
                         />
                </FormGroup>
                <FormGroup>
                    <Label for="availableBloodGroup">Available Blood Group</Label>
                    <Input type='text' name='availableBloodGroup' id='availableBloodGroup'
                    value ={this.state.availableBloodGroup}
                    onChange={this.handleChange}
                         />
                </FormGroup>
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                <Button block color='danger' onClick={() => this.props.history.push('/admindash')}>Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}


