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
                    <Input type='patientName' name='patientName' id='patientName'
                         />
                </FormGroup>
                <FormGroup>
                    <Label for='patientAge'>Patient Age </Label>
                    <Input type='age' name='patientAge' id='patientAge'
                        
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
                    <Input type='hospitalName' name='hospitalName' id='hospitalName'
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
                    <Label for='requirementReason'>Requirement Reason</Label>
                    <Input type='date' name='requirementReason' id='requirementReason'
                         />
                    </FormGroup>

                <FormGroup>
                <Label for='gender'>Gender</Label>
                <Input type='select' id='gender' //onChange={props.handleCategoryChange}
                >
                    <option value=''>Select Gender</option>
                    <option value=''>male</option>
                    <option value=''>female</option>
                    <option value=''>other</option>
                    {/* {
                        props.categories.map((category) => {
                            return (<option value={category._id} key={category._id}>
                                {category.name}
                            </option>)
                        })
                    } */}
                </Input>
            </FormGroup>
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                <Button block color='warning' onClick={() => this.props.history.push('/')}>Cancel</Button>
            </Form>
        </div>
        )
    }
    
}


