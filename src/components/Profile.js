import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'

export default class Profile extends Component{
   
    
    render(){
        return(
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type='email' name='email' id='email'
                        //value={this.state.email}
                        //onChange={this.handleChange}
                         />
                </FormGroup>
                <FormGroup>
                    <Label for='dateOfBirth'>Date Of Birth </Label>
                    <Input type='date' name='dateOfBirth' id='dateOfBirth'
                        //value={this.state.dateOfBirth}
                       // onChange={this.handleChange}
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
                    <Label for='lastDonation'>Last Donation Date</Label>
                    <Input type='date' name='lastDonation' id='lastDonation'
                       // value={this.state.lastDonation}
                        //onChange={this.handleChange}
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


