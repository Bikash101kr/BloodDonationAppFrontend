import React  from 'react'
import jwt_decode from 'jwt-decode'
import NavBar from './NavBar'
import axios from 'axios'

export default class ViewProfileDetails extends React.Component{
   
    constructor(props) {
        super(props)

        this.state = {
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
        
    
    
    render() {
        return(
            <div>
                <NavBar/>
            
                <div id="main" class="wrapper style1">
                <section class="container">
                        <section class="4u">   
                            <h3>Your Info</h3>
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
