import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect } from 'react-router-dom'
import NavBar from '../NavBar'

export default function UpdatedDonation(props) {
	let {id} = useParams();
	return (
        
		<div>
           
			<UpdateForm id={id}/>
            
		</div>
	)

}

 export class UpdateForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
			id: this.props.id,
            weight: '',
            country: '',
            state: '',
            district: '',
            city: '',
            street: '',
            location: '',
            status: '',
            bloodGroup:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') },
                isUpdate: false
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        if(window.confirm('Are you sure to update your donation details?'))
        event.preventDefault();
		axios.put('http://localhost:3000/api/DonateBlood/' + this.props.id, this.state, this.state.config)
		.then((res) => {
            console.log(res)
            
		}).catch(err => console.log(err.response.data));
            
    }
    state ={
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect:true
        })
    }
    handleCancel = ()=> {
        if (this.state.redirect){
            return<Redirect to ='/userdashboard/viewdonations'/>
       
        }
    }

	
	componentDidMount = () => {
		axios.get('http://localhost:3000/api/DonateBlood/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
                weight: res.data.weight,
                bloodGroup: res.data.bloodGroup,
				country: res.data.country,
				state: res.data.state,
				district: res.data.district,
				city: res.data.city,
				street: res.data.street,
				location: res.data.location,
				status:res.data.status,
				
			})
		}).catch(err => console.log(err.response.data));
	}

    render(){
        return(
            <div>
                
                <NavBar history = {this.props.history}/>
            
            <div className='container'>
            <Form>
                <FormGroup>
                    <Label for="weight">Weight (in kg)</Label>
                    <Input type='number' name='weight' id='weight'
                    value ={this.state.weight}
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
            </FormGroup>
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
                <FormGroup>
                    <Label for='location'>Location</Label>
                    <Input type='text' name='location' id='location'
                        value ={this.state.location}
                        onChange={this.handleChange} 
                        />
                    </FormGroup>

                <FormGroup>
                <Label for='status'>Status</Label>
                <Input type='select' name='status' id='status'
                value ={this.state.status}
                onChange={this.handleChange} >
                    <option value=''>Blood Status</option>
                    <option value='used'>used</option>
                    <option value='on the way'>on the way</option>
                    <option value='stocked on blood bank'>stocked on blood bank</option>
                </Input>
            </FormGroup>
                
                <Button block color="primary" onClick={this.handleSubmit}>Submit</Button>
                {this.handleCancel()}
                <Button block color='warning' onClick={this.setRedirect}>Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}



