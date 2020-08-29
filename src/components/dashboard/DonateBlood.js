import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

export default class DonateBlood extends Component{
   
    
    render(){
        return(
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="weight">Weight (in kg)</Label>
                    <Input type='number' name='weight' id='weight'
                         />
                </FormGroup>
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
                <FormGroup>
                    <Label for='location'>Location</Label>
                    <Input type='text' name='location' id='location'
                         />
                    </FormGroup>

                <FormGroup>
                <Label for='status'>Status</Label>
                <Input type='select' id='status'>
                    <option value=''>Blood Status</option>
                    <option value=''>used</option>
                    <option value=''>on the way</option>
                    <option value=''>stocked on blood bank</option>
                </Input>
            </FormGroup>
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                <Button block color='warning' onClick={() => this.props.history.push('/')}>Cancel</Button>
            </Form>
        </div>
        )
    }
    
}


