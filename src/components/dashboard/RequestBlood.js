import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

export default class RequestBlood extends Component{
   
    
    render(){
        return(
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="patientName">Patient Name</Label>
                    <Input type='text' name='patientName' id='patientName'
                         />
                </FormGroup>
                <FormGroup>
                    <Label for='patientAge'>Patient Age </Label>
                    <Input type='text' name='patientAge' id='patientAge'
                        
                    />
                     <FormGroup>
                    <Label for='country'>Country</Label>
                    <Input type='text' name='country' id='country'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='district'>District</Label>
                    <Input type='text' name='district' id='district'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='city'>City</Label>
                    <Input type='text' name='city' id='city'
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for='street'>Street</Label>
                    <Input type='text' name='street' id='street'
                    />
                
                </FormGroup>
                </FormGroup>
                    <FormGroup>
                    <Label for='hospitalName'>Hospital Name</Label>
                    <Input type='text' name='hospitalName' id='hospitalName'
                    />
                
                </FormGroup>
                <FormGroup>
                    <Label for='location'>Location</Label>
                    <Input type='text' name='location' id='location'
                         />
                    </FormGroup>
                <FormGroup>
                    <Label for='bloodGroup'>Blood Group</Label>
                    <Input type='select' name='bloodGroup' id='bloodGroup'>
                    <option value='' >Select Blood Group </option>
                    <option value=''>A+</option>
                    <option value=''>B+</option>
                    <option value=''>AB+</option>
                    <option value=''>O+</option>
                    <option value=''>A-</option>
                    <option value=''>B-</option>
                    <option value=''>AB-</option>
                    <option value=''>O-</option>
                    </Input>
                         
                </FormGroup>
                <FormGroup>
                <Label for='requirement'>Requirement Type</Label>
                <Input type='select' id='requirement'
                >
                    <option value=''>Select Requirement Type</option>
                    <option value=''>fresh</option>
                    <option value=''>stored</option>
                    <option value=''>any of above</option>
                </Input>
            </FormGroup>
                <FormGroup>
                    <Label for='requirementReason'>Requirement Reason</Label>
                    <Input type='text' name='requirementReason' id='requirementReason'
                         />
                    </FormGroup>
                    <FormGroup>
                    <Label for='requireBefore'>Require Before</Label>
                    <Input type='date' name='requireBefore' id='requireBefore'
                         />
                    </FormGroup>

                
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                <Button block color='warning' onClick={() => this.props.history.push('/')}>Cancel</Button>
            </Form>
        </div>
        )
    }
    
}


