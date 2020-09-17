import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import NavBar from '../NavBar'
export default class AddRequest extends Component{
    constructor(props) {
        super(props)

        this.state = {
            patientName: '',
            patientAge: '',
            bloodGroup:'',
            country: '',
            state: '',
            district: '',
            City: '',
            street: '',
            hospitalName:'',
            location: '',
            needUnit: '',
            requirement:'',
            requirementReason:'',
            requireBefore:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        if(window.confirm('Are you sure to request blood?'))
        event.preventDefault();
        axios.post('http://localhost:3000/api/RequestBlood', this.state, this.state.config)
            .then((res) => {
                console.log(res)
                this.props.history.push('/userdashboard/viewrequests')
            }).catch(err => console.log(err.response.data));
            
    }
    handleEdit = (requestId) => {
        this.props.history.push(`/userdash/requestbloods/${requestId}`);
    }
    render(){
        return(
            <div>
                <NavBar history = {this.props.history}/>
            
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="patientName">Patient Name</Label>
                    <Input type='text' name='patientName' id='patientName'
                     value ={this.state.patientName}
                     onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for='patientAge'>Patient Age </Label>
                    <Input type='text' name='patientAge' id='patientAge'
                     value ={this.state.patientAge}
                     onChange={this.handleChange}
                        
                    />
                     <FormGroup>
                    <Label for='country'>Country</Label>
                    <Input type='text' name='country' id='country'
                     value ={this.state.country}
                     onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='state'>State</Label>
                    <Input type='text' name='state' id='state'
                     value ={this.state.state}
                     onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='district'>District</Label>
                    <Input type='text' name='district' id='district'
                     value ={this.state.district}
                     onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='city'>City</Label>
                    <Input type='text' name='city' id='city'
                     value ={this.state.city}
                     onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for='street'>Street</Label>
                    <Input type='text' name='street' id='street'
                     value ={this.state.street}
                     onChange={this.handleChange}
                    />
                
                </FormGroup>
                </FormGroup>
                    <FormGroup>
                    <Label for='hospitalName'>Hospital Name</Label>
                    <Input type='text' name='hospitalName' id='hospitalName'
                     value ={this.state.hospitalName}
                     onChange={this.handleChange}
                    />
                
                </FormGroup>
                <FormGroup>
                    <Label for='location'>Location</Label>
                    <Input type='text' name='location' id='location'
                     value ={this.state.location}
                     onChange={this.handleChange}
                         />
                    </FormGroup>
            <FormGroup>
            <Label for='bloodGroup'>Blood Group</Label>
            <Input type='select' name='bloodGroup' id='bloodGroup' 
            value ={this.state.bloodGroup}
            onChange={this.handleChange} >
            <option value='' >Select Blood Group </option>
            <option value='A+'>A+</option>
            <option value='B+'>B+</option>
            <option value='AB+'>AB+</option>
            <option value='O+'>O+</option>
            <option value='A-'>A-</option>
            <option value='B-'>B-</option>
            <option value='AB-'>AB-</option>
            <option value='O-'>O-</option>
            
            </Input>
            <FormGroup>
                    <Label for='needUnit'>Need Unit</Label>
                    <Input type='text' name='needUnit' id='needUnit'
                     value ={this.state.need}
                     onChange={this.handleChange}
                    />
                </FormGroup>
                 
        </FormGroup>
                <FormGroup>
                <Label for='requirement'>Requirement Type</Label>
                <Input type='select' name='requirement' id='requirement'
                value ={this.state.requirement}
                onChange={this.handleChange}
                >
                    <option value=''>Select Requirement Type</option>
                    <option value='fresh'>fresh</option>
                    <option value='stored'>stored</option>
                    <option value='any of above'>any of above</option>
                </Input>
            </FormGroup>
                <FormGroup>
                    <Label for='requirementReason'>Requirement Reason</Label>
                    <Input type='text' name='requirementReason' id='requirementReason'
                     value ={this.state.requirementReason}
                     onChange={this.handleChange}
                     />
                    </FormGroup>
                    <FormGroup>
                    <Label for='requireBefore'>Require Before</Label>
                    <Input type='datetime-local' name='requireBefore' id='requireBefore'
                     value ={this.state.requireBefore}
                     onChange={this.handleChange}
                         />
                    </FormGroup>

                
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                <Button block color='warning' onClick={() => this.props.history.push('/userdash')}>Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}


