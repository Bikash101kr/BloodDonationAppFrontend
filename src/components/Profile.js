import React  from 'react'
import '../components/NavBar'
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import jwt_decode from 'jwt-decode'
import NavBar from './NavBar'

export default class Profile extends React.Component{
   
    constructor(props) {
        super(props)

        this.state = {
            UserId: '',
            username: '',
            firstName: '',
            lastName:'',
            phone:'',
            role:'',
            email: '',
            dateOfBirth: '',
            gender: '',
            bloodGroup: '',
            image:'',
            lastDonation:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') },
                isUpdate: false
            }
        }
    }
    componentDidMount= ()=> {
    const token = localStorage.getItem('token')
    const decoded=jwt_decode(token)
     axios.get('http://localhost:3000/api/profile/' + decoded.id ,  this.state.config)
     .then((res)=> {
         console.log(res.data)
         this.setState({
            username: res.data.username,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        phone: res.data.phone,
                        role: res.data.role,
                        email:res.data.email ,
                        dateOfBirth: res.data.dateOfBirth,
                        gender: res.data.gender,
                        bloodGroup: res.data.bloodGroup,
                        lastDonation:res.data.lastDonation,
                        image:res.data.image,
         })

     })
        
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, ( ) => console.log(this.state))
    }

    handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    const decoded=jwt_decode(token)
    if(window.confirm('Do you want to save changes?'))
        axios.put("http://localhost:3000/api/profile/" + decoded.id, this.state, this.state.config, {
                headers: { 'Authorization': localStorage.getItem('token') }
             })
            .then((res) => {
                this.setState({

                    username: '',
                    firstName: '',
                    lastName:'',
                    phone:'',
                    role:'',
                    email: '',
                    dateOfBirth: '',
                    gender: '',
                    bloodGroup: '',
                    lastDonation:''  
                })
                this.props.history.push('/userdashboard/viewprofiledetails')
            }).catch(err => console.log(err.response.data.message))
    }

    
    render() {
        return(
            <div>
                <NavBar history = {this.props.history}/>
         
            <div className='container'>
    <Form>
    <FormGroup>
    <Label for="firstName">First Name</Label>
        <Input name='firstName' type='text'
            value={this.state.firstName}
            onChange={this.handleChange} />
    </FormGroup>
    <FormGroup>
    <Label for="lastName">Last Name</Label>
        <Input name='lastName' type='text' 
            value={this.state.lastName}
            onChange={this.handleChange} />
    </FormGroup>
    <FormGroup>
    <Label for="phone">Phone</Label>
        <Input name='username' type='text' 
            value={this.state.phone}
            onChange={this.handleChange} />
    </FormGroup>
    <FormGroup>
    </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type='email' name='email' id='email'
            value ={this.state.email}
            onChange={this.handleChange}
                
                 />
        </FormGroup>
        <FormGroup>
            <Label for='dateOfBirth'>Date Of Birth </Label>
            <Input type='date' name='dateOfBirth' id='dateOfBirth'
            value ={this.state.dateOfBirth}
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
            <Label for='lastDonation'>Last Donation Date</Label>
            <Input type='date' name='lastDonation' id='lastDonation'
            value ={this.state.lastDonation}
            onChange={this.handleChange}
            
                 />
            </FormGroup>

        <FormGroup>
        <Label for='gender'>Gender</Label>
        <Input type='select' name= 'gender' id='gender' 
        value ={this.state.gender}
        onChange={this.handleChange}
        >
            <option value=''>Select Gender</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>other</option>
            
            
        </Input>
    </FormGroup>
        
        <Button block color="primary" onClick={this.handleSubmit}>Update</Button>
    </Form>
</div>
</div>

    )
}

}


// export default class Profile extends React.Component{
   
//     constructor(props) {
//         super(props)

//         this.state = {
//             profileId: '',
//             username: '',
//             firstName: '',
//             lastName:'',
//             phone:'',
//             role:'',
//             email: '',
//             dateOfBirth: '',
//             gender: '',
//             bloodGroup: '',
//             lastDonation:'',
//             config: {
//                 headers: { 'Authorization': localStorage.getItem('token') },
//                 isUpdate: false
//             }
//         }
//     }
//     componentDidMount= ()=> {
//     const token = localStorage.getItem('token')
//     const decoded=jwt_decode(token)
//       this.setState({
//                 username: decoded.username,
//                 firstName: decoded.firstName,
//                 lastName: decoded.lastName,
//                 phone: decoded.phone,
//                 role: decoded.role,
//                 profileID: decoded.pro_id
            
            
//       })
//         axios.get("http://localhost:3000/api/profile/" + decoded.pro_id, {
//             headers: { 'Authorization': localStorage.getItem('token') }
//         })
//         .then ((res) => {
//             console.log(res.data)
//             this.setState({
//                 profileId: res.data.id,
//                 email:res.data.email,
//                 dateOfBirth:res.data.dateOfBirth,
//                 gender: res.data.gender,
//                 bloodGroup:res.data.bloodGroup,
//                 lastDonation:res.data.lastDonation
//             })
           
//         }).catch(err => console.log(err.response));
//     }
    

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         }, ( ) => console.log(this.state))
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:3000/api/profile', this.state, this.state.config )
//             .then((res) => {
//                 this.setState({
//                     email: '',
//                     dateOfBirth: '',
//                     gender: '',
//                     bloodGroup: '',
//                     lastDonation:''  
//                 })
//             }).catch(err => console.log(err.response.data.message))
//     }

    
//     render() {
//         return(
//             <div className='container'>
//     <Form>
//     <FormGroup>
//     <Label for="username">Username</Label>
//         <Input name='username' type='text' edit = 'disable' 
//             value={this.state.username} />
//     </FormGroup>
//     <FormGroup>
//     <Label for="firstName">First Name</Label>
//         <Input name='firstName' type='text' click = 'disable' edit = 'disable' 
//             value={this.state.firstName} />
//     </FormGroup>
//     <FormGroup>
//     <Label for="lastName">Last Name</Label>
//         <Input name='lastName' type='text' edit = 'disable' 
//             value={this.state.lastName} />
//     </FormGroup>
//     <FormGroup>
//     <Label for="phone">Phone</Label>
//         <Input name='username' type='text' edit = 'disable' 
//             value={this.state.phone} />
//     </FormGroup>
//     <FormGroup>
//     <Label for="role">Role</Label>
//         <Input name='role' type='text' 
//             value={this.state.role}
//             onChange={this.handleChange} />
//     </FormGroup>
//         <FormGroup>
//             <Label for="email">Email</Label>
//             <Input type='email' name='email' id='email'

//             value ={this.state.email}
//             onChange={this.handleChange}
                
//                  />
//         </FormGroup>
//         <FormGroup>
//             <Label for='dateOfBirth'>Date Of Birth </Label>
//             <Input type='date' name='dateOfBirth' id='dateOfBirth'
//             value ={this.state.dateOfBirth}
//             onChange={this.handleChange}
            
//             />
//         </FormGroup>
//         <FormGroup>
//             <Label for='bloodGroup'>Blood Group</Label>
//             <Input type='select' name='bloodGroup' id='bloodGroup' 
//             value ={this.state.bloodGroup}
//             onChange={this.handleChange} >
//             <option value='' >Select Blood Group </option>
//             <option value='A+'>A+</option>
//             <option value='B+'>B+</option>
//             <option value='AB+'>AB+</option>
//             <option value='O+'>O+</option>
//             <option value='A-'>A-</option>
//             <option value='B-'>B-</option>
//             <option value='AB-'>AB-</option>
//             <option value='O-'>O-</option>
            
//             </Input>
                 
//         </FormGroup>
//         <FormGroup>
//             <Label for='lastDonation'>Last Donation Date</Label>
//             <Input type='date' name='lastDonation' id='lastDonation'
//             value ={this.state.lastDonation}
//             onChange={this.handleChange}
            
//                  />
//             </FormGroup>

//         <FormGroup>
//         <Label for='gender'>Gender</Label>
//         <Input type='select' name= 'gender' id='gender' 
//         value ={this.state.gender}
//         onChange={this.handleChange}
//         >
//             <option value=''>Select Gender</option>
//             <option value='male'>male</option>
//             <option value='female'>female</option>
//             <option value='other'>other</option>
            
            
//         </Input>
//     </FormGroup>
        
//         <Button block color="primary" onClick={this.handleSubmit}>Update</Button>
//     </Form>
// </div>

//     )
// }

// }
