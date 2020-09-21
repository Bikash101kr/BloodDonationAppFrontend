import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect} from 'react-router-dom'
import NavBarAdmin from '../NavBarAdmin'

export default function UpdateDonationStatus(props) {
	let {id} = useParams();
	return (
		<div>
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
        if(window.confirm('Are you sure to update the user blood status ?'))
        event.preventDefault();
		axios.put('http://localhost:3000/api/Admin/' + this.props.id + '/status', this.state, this.state.config)
		.then((res) => {
			console.log(res)
		}).catch(err => console.log(err.response.data));
            
    }


	handleUpdate = () => {
		
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
            return<Redirect to ='/admindashboard/adminviewdonations'/>
       
        }
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
            <div>
                <NavBarAdmin history = {this.props.history}/>
            
            <div className='container'>
            <Form>

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
                <Button block color='danger' onClick={this.setRedirect}>Cancel</Button>
            </Form>
        </div>
        </div>
        )
    }
    
}


