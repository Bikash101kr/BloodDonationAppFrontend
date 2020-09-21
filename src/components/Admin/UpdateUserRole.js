import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import { useParams, Redirect} from 'react-router-dom'
import NavBarAdmin from '../NavBarAdmin'

export default function UpdateUserRole(props) {
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
            username: '',
            firstName: '',
            lastName:'',
            phone:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            bloodGroup: '',
            lastDonation:'',
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
        if(window.confirm('Are you sure to update user current role ?'))
        event.preventDefault();
		axios.put('http://localhost:3000/api/admin/' + this.props.id + '/role', this.state, this.state.config)
		.then((res) => {
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
            return<Redirect to ='/admindashboard/adminviewusers'/>
       
        }
    }
	
	componentDidMount = () => {
		axios.get('http://localhost:3000/api/admin/' + this.state.id , this.state.config)
		.then((res) => {
			console.log(res);
			this.setState({
				role:res.data.role,
				
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
                <Label for='role'>Role</Label>
                <Input type='select' name='role' id='role'
                value ={this.state.role}
                onChange={this.handleChange} >
                    <option value=''>User Role</option>
                    <option value='basic'>basic</option>
                    <option value='admin'>admin</option>
                
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


