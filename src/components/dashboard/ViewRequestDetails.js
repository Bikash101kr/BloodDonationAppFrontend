import React, {Component} from 'react'
import { Form, FormGroup, Label, Input,} from 'reactstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'

export default function ViewRequestDetails(props) {
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
            patientName: '',
            patientAge: '',
            bloodGroup:'',
            country: '',
            state: '',
            district: '',
            city: '',
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
	componentDidMount = () => {
		axios.get('http://localhost:3000/api/RequestBlood/' +  this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				patientName: res.data.patientName,
				patientAge: res.data.patientAge,
				bloodGroup: res.data.bloodGroup,
				country: res.data.country,
				state: res.data.state,
				district: res.data.district,
				city: res.data.city,
				street: res.data.street,
				hospitalName:res.data.hospitalName,
				location: res.data.location,
				needUnit: res.data.needUnit,
				requirement:res.data.requirement,
				requirementReason:res.data.requirementReason,
				requireBefore:res.data.requireBefore,
				
			})
		}).catch(err => console.log(err.response.data));
	}

    render(){
        return(
            <div>
                <NavBar/>
            <div id="main" class="wrapper style1">
            <section class="container">
                    <section class="4u">   
                        <h3>Your Info</h3>
                        <p>Patient Name: <i>{this.state.patientName}</i></p>
                        <p>Patient Age : <i>{this.state.patientAge} </i></p>
                        <p>Blood Group: <i>{this.state.bloodGroup}</i></p>
                        <p>Country: <i>{this.state.country}</i></p>
                        <p>State: <i>{this.state.state}</i></p>
                        <p>District: <i>{this.state.district}</i></p>
                        <p>City: <i>{this.state.city}</i></p>
                        <p>Street: <i>{this.state.street}</i></p>
                        <p>Hospital Name: <i>{this.state.hospitalName}</i></p>
                        <p>Location: <i>{this.state.location}</i></p>
                        <p>Need Unit : <i>{this.state.needUnit}</i></p>
                        <p>Requirement Type: <i>{this.state.requirement}</i></p>
                        <p>Requirement Reason: <i>{this.state.requirementReason}</i></p>
                        <p>Require Before : <i>{this.state.requireBefore}</i></p>
                    </section>
                
            </section> 
            </div>
            </div>
       
        )
    }
    
}


