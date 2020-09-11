import React, {Component} from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import jwt_decode from 'jwt-decode'

export default class Profile extends React.Component{
   
    constructor(props) {
        super(props)

        this.state = {
            profile_id: '',
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
    componentDidMount(){
    const token = localStorage.getItem('token')
    const decoded=jwt_decode(token)
      this.setState({
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                phone: decoded.phone,
                role: decoded.role,
                email:decoded.email,
      })
      this.fetchProfileDetails(this.state.profile_id);
    }
    fetchProfileDetails=(profile_id)=>{
        axios.get("http://localhost:3000/api/profile/"+profile_id, this.state, this.state.config,{
        headers: {
            "content-type": "application/json"
          } 
        })
        .then ((res) => {
            this.setState({
                email:res.data,
                dateOfBirth: '',
                gender: '',
                bloodGroup: '',
                lastDonation:''
                

            })
           
        }).catch(err => console.log(err.response));
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, ( ) => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/Profile', this.state, this.state.config )
            .then((res) => {
                console.log(res)
            }).catch(err => console.log(err.response.data))
    }

    
    render() {
        return(
            <div className='container'>
    <Form>
    <FormGroup>
    <Label for="username">Username</Label>
        <Input name='username' type='text' edit = 'disable' 
            value={this.state.username} />
    </FormGroup>
    <FormGroup>
    <Label for="firstName">First Name</Label>
        <Input name='firstName' type='text' click = 'disable' edit = 'disable' 
            value={this.state.firstName} />
    </FormGroup>
    <FormGroup>
    <Label for="lastName">Last Name</Label>
        <Input name='lastName' type='text' edit = 'disable' 
            value={this.state.lastName} />
    </FormGroup>
    <FormGroup>
    <Label for="phone">Phone</Label>
        <Input name='username' type='text' edit = 'disable' 
            value={this.state.phone} />
    </FormGroup>
    <FormGroup>
    <Label for="role">Role</Label>
        <Input name='role' type='text' edit = 'disable' 
            value={this.state.role} />
    </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type='email' name='email' id='email'

            value ={this.state.email}
            onChange={(event)=> this.emailchange(event)}
                
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

    )
}

}

   

// import React, {Component, useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from 'axios'
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import jwt_decode from 'jwt-decode'

// const Profile = () => {
//     const [profile, setProfile] = useState({
//             username: "",
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
//                 headers: { 'Authorization': localStorage.getItem('token') }
//             }

//     });
//     componentDidMount() {
//     const token = localStorage.getItem('token')
//     const decoded=jwt_decode(token)
//       this.setState({
//                 username: decoded.username,
//                 firstName: decoded.firstName,
//                 lastName: decoded.lastName,
//                 phone: decoded.phone,
//                 role: decoded.role,
//       })
// // const { id } = useParams();
// //   useEffect(() => {
// //     loadProfile();
// //   }, []);
// //   const loadProfile = async () => {
// //     const res = await axios.get(`http://localhost:3000/api/profile/${id}`, process.config);
// //     setProfile(res.data);
// //   };
// //   return(
// //     <div className='container'>
// //     <Form>
// //     <FormGroup>
// //     <Label for="username">Username</Label>
// //         <Input name='username' type='text' edit = 'disable' 
// //             value={profile.username} />
// //     </FormGroup>
// //     <FormGroup>
// //     <Label for="firstName">First Name</Label>
// //         <Input name='firstName' type='text' click = 'disable' edit = 'disable' 
// //             value={profile.firstName} />
// //     </FormGroup>
// //     <FormGroup>
// //     <Label for="lastName">Last Name</Label>
// //         <Input name='lastName' type='text' edit = 'disable' 
// //             value={profile.lastName} />
// //     </FormGroup>
// //     <FormGroup>
// //     <Label for="phone">Phone</Label>
// //         <Input name='username' type='text' edit = 'disable' 
// //             value={profile.phone} />
// //     </FormGroup>
// //     <FormGroup>
// //     <Label for="role">Role</Label>
// //         <Input name='role' type='text' edit = 'disable' 
// //             value={profile.role} />
// //     </FormGroup>
// //         <FormGroup>
// //             <Label for="email">Email</Label>
// //             <Input type='email' name='email' id='email'

// //             value ={profile.email}
            
                
// //                  />
// //         </FormGroup>
// //         <FormGroup>
// //             <Label for='dateOfBirth'>Date Of Birth </Label>
// //             <Input type='date' name='dateOfBirth' id='dateOfBirth'
// //             value ={profile.dateOfBirth}
            
            
// //             />
// //         </FormGroup>
// //         <FormGroup>
// //             <Label for='bloodGroup'>Blood Group</Label>
// //             <Input type='select' name='bloodGroup' id='bloodGroup' 
// //             value ={profile.bloodGroup}
// //              >
// //             <option value='' >Select Blood Group </option>
// //             <option value='A+'>A+</option>
// //             <option value='B+'>B+</option>
// //             <option value='AB+'>AB+</option>
// //             <option value='O+'>O+</option>
// //             <option value='A-'>A-</option>
// //             <option value='B-'>B-</option>
// //             <option value='AB-'>AB-</option>
// //             <option value='O-'>O-</option>
            
// //             </Input>
                 
// //         </FormGroup>
// //         <FormGroup>
// //             <Label for='lastDonation'>Last Donation Date</Label>
// //             <Input type='date' name='lastDonation' id='lastDonation'
// //             value ={profile.lastDonation}
        
            
// //                  />
// //             </FormGroup>

// //         <FormGroup>
// //         <Label for='gender'>Gender</Label>
// //         <Input type='select' name= 'gender' id='gender' 
// //         value ={profile.gender}
    
// //         >
// //             <option value=''>Select Gender</option>
// //             <option value='male'>male</option>
// //             <option value='female'>female</option>
// //             <option value='other'>other</option>
            
            
// //         </Input>
// //     </FormGroup>
        
// //     </Form>
// // </div>

// //   );
// //   };

// export default Profile;

// export default class Profile extends Component{
   
//     constructor(props) {
//         super(props)

//         this.state = {
//             id:0,
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
//                 headers: { 'Authorization': localStorage.getItem('token') }
//             }
//         }
//     }
//     componentDidMount(){
//     const token = localStorage.getItem('token')
//     const decoded=jwt_decode(token)
//       this.setState({
//                 username: decoded.username,
//                 firstName: decoded.firstName,
//                 lastName: decoded.lastName,
//                 phone: decoded.phone,
//                 role: decoded.role,
//       })
//         axios.get('http://localhost:3000/api/profile/{_id}', this.state, this.state.config)
//         .then ((res) => {
//             this.setState({
//                 profiles: res.data,
//                 id:0,
//                 email:'',
//                 dateOfBirth: '',
//                 gender: '',
//                 bloodGroup: '',
//                 lastDonation:''
                

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
//         axios.post('http://localhost:3000/api/Profile', this.state, this.state.config )
//             .then((res) => {
//                 console.log(res)
//             }).catch(err => console.log(err.response.data))
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
//         <Input name='role' type='text' edit = 'disable' 
//             value={this.state.role} />
//     </FormGroup>
//         <FormGroup>
//             <Label for="email">Email</Label>
//             <Input type='email' name='email' id='email'

//             value ={this.state.email}
//             onChange={(event)=> this.emailchange(event)}
                
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

