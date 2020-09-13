import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function UpdateDonation(props) {
	let {id} = useParams();
	return (
		<div>
			<h1>{id}</h1>
			<UpdateForm id={id}/>
		</div>
	)

}

 class UpdateForm extends Component{
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
        event.preventDefault();
		axios.put('http://localhost:3000/api/DonateBlood/' + this.props.id, this.state, this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }


	handleUpdate = () => {
		
	}
	
	componentDidMount = () => {
		axios.get('http://localhost:3000/api/DonateBlood/' + this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				weight: res.data.weight,
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
                <Button block color='warning' onClick={() => this.props.history.push('/')}>Cancel</Button>
            </Form>
        </div>
        )
    }
    
}


