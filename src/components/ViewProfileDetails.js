import React  from 'react'
import axios from 'axios'
import {  } from 'reactstrap'
import jwt_decode from 'jwt-decode'

export default class ViewProfileDetails extends React.Component{
   
    constructor(props) {
        super(props)

        this.state = {
            profileId: '',
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
      this.setState({
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                phone: decoded.phone,
                role: decoded.role,
                profileID: decoded.pro_id
            
            
      })
        axios.get("http://localhost:3000/api/profile/" + decoded.pro_id, {
            headers: { 'Authorization': localStorage.getItem('token') }
        })
        .then ((res) => {
            console.log(res.data)
            this.setState({
                profileId: res.data.id,
                email:res.data.email,
                dateOfBirth:res.data.dateOfBirth,
                gender: res.data.gender,
                bloodGroup:res.data.bloodGroup,
                lastDonation:res.data.lastDonation
            })
           
        }).catch(err => console.log(err.response));
    }
    
    
    render() {
        return(
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
           
        )
    }
    

}
