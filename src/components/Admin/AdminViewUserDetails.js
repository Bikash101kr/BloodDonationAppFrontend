import React, {Component} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBarAdmin from '../NavBarAdmin'


export default function AdminUserDetails(props) {
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
            username:'',
            firstName: '',
            lastName: '',
            phone:'',
            address:'',
            role:'',
            bloodGroup:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            lastDonationDate: '',
            image: '',
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
		axios.get('http://localhost:3000/api/Admin/' +  this.state.id, this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				username: res.data.username,
				firstName: res.data.firstName,
				bloodGroup: res.data.bloodGroup,
				lastName: res.data.lastName,
				phone: res.data.phone,
				role: res.data.role,
				email: res.data.email,
				dateOfBirth: res.data.dateOfBirth,
				gender:res.data.gender,
				lastName: res.data.lastDonationDate,
				
			})
		}).catch(err => console.log(err.response.data));
	}

    render(){
        return(
            <div>
                <NavBarAdmin history = {this.props.history}/>
            
            <div id="main" class="wrapper style1">
            <section class="container">
            <section class="4u">   
                            <h3>User Info</h3>
                            <p>Username: <i>{this.state.username}</i></p>
                            <p> First Name : <i>{this.state.firstName} </i></p>
                            <p>Last Name : <i>{this.state.lastName}</i></p>
                            <p>Phone: <i>{this.state.phone}</i></p>
                            <p>Role: <i>{this.state.role}</i></p>
                            <p>Email: <i>{this.state.email}</i></p>
                            <p>Date Of Birth: <i>{this.state.dateOfBirth}</i></p>
                            <p>Gender: <i>{this.state.gender}</i></p>
                            <p>Blood Group: <i>{this.state.bloodGroup}</i></p>
                            <p>Last Donation Date : <i>{this.state.lastDonation}</i></p>
                        </section>
                
            </section> 
            </div>
            </div>
       
        )
    }
    
}


