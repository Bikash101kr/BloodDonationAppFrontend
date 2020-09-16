// import React, {Component} from 'react'
// import NavBar from '../NavBar'
// import jwt_decode from 'jwt-decode'
// import bloodbank from '../css/images/bloodbank.png'
// import users from '../css/images/users.png'
// import bloodgroup from '../css/images/bloodgroups.jpg'


// export default class UserDashboard extends Component{
//     constructor(props) {
//         super(props)

//         this.state = {
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
//         username: decoded.username,
//         firstName: decoded.firstName,
//         lastName: decoded.lastName,
//         phone: decoded.phone,
//         role: decoded.role,
//         email:decoded.email ,
//         dateOfBirth: decoded.dateOfBirth,
//         gender: decoded.gender,
//         bloodGroup: decoded.bloodGroup,
//         lastDonation:decoded.lastDonation,
//         image:decoded.image,
//         UserId: decoded.id,
//       })
        
//     }
    
    
//     render() {
//         return(
//             <div>
//                 <NavBar/>
//                 <div id="main" class="wrapper style1">
//                 <section class="container">
//                     <header class="major">
//                         <h2>Hello : {this.state.firstName} {this.state.lastName}</h2>
//                         <span class="byline">This is Serve Humanity User Dashboard</span>
//                     </header>
//                     <div class="row no-collapse-1">
//                         <section class="4u">   
                                                 
//                             <a href="!#" class="image feature"></a>
//                             <img src={users} alt="Users" />
//                             <h3>Your Info</h3>
//                             <p>Full Name : <i>{this.state.firstName} {this.state.lastName}</i></p>
//                             <p>Username: <i>{this.state.username}</i></p>
//                             <p>Blood Group: <i>{this.state.bloodGroup}</i></p>
//                             <p>Phone Number : <i>{this.state.phone}</i></p>
//                         </section>
//                         <section class="4u">                            
//                             <a href="/!#" class="image feature"></a>
//                             <img src={bloodbank} alt="bloodbank" />
//                             <h3>Blood Bank</h3>
//                             <p>Available blood bank will be displayed here</p>
                    
//                         </section>
//                         <section class="4u">
//                             <a href="/!#" class="image feature"></a>
//                             <img src={bloodgroup} alt="bloodgroup" />
//                             <h3>Blood Groups</h3>
//                             <p>Available blood groups will be displayed here</p>
//                         </section>

//                     </div>
//                 </section> 
//                 </div>
//             </div>
//         )
//     }
    

// }
import React, {Component} from 'react'
import NavBar from '../NavBar'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';
import bloodbank from '../css/images/bloodbank.png';
import users from '../css/images/users.png';
import bloodgroup from '../css/images/bloodgroups.jpg';
import BloodBankList from './BloodBankList';
export default class UserDashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            profileId:'',
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
            bloodbanks: [],
            bloodbankId:'',
            BloodBankName: '',
            availableBloodGroup:'',    
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
        email:decoded.email ,
        dateOfBirth: decoded.dateOfBirth,
        gender: decoded.gender,
        bloodGroup: decoded.bloodGroup,
        lastDonation:decoded.lastDonation,
        image:decoded.image,
        UserId: decoded.id

        
      })
    }

    
    render() {
        return(
            <div>
                <NavBar/>
                <div id="main" class="wrapper style1">
                <section class="container">
                    <header class="major">
                        <h2>Hello : {this.state.firstName} {this.state.lastName}</h2>
                        <span class="byline">This is Serve Humanity User Dashboard</span>
                    </header>
                    <div class="row no-collapse-1">
                        <section class="4u">   
                            <a href="!#" class="image feature"></a>
                            <img src={users} alt="Users" />
                            <h3>Your Info</h3>
                            <p>Full Name : <i>{this.state.firstName} {this.state.lastName}</i></p>
                            <p>Username: <i>{this.state.username}</i></p>
                            <p>Blood Group: <i>{this.state.bloodGroup}</i></p>
                            <p>Phone Number : <i>{this.state.phone}</i></p>
                            <Link class="btn btn-primary mr-2" to='/userdashboard/profile/:id'> Edit </Link>
                        </section>
                        <section class="4u">                            
                            <a href="/!#" class="image feature"></a>
                            <img src={bloodbank} alt="bloodbank" />
                            <h3>Blood Bank</h3>
                            <BloodBankList/>

      
                        </section>
                        <section class="4u">
                            <a href="/!#" class="image feature"></a>
                            <img src={bloodgroup} alt="bloodgroup" />
                            <h3>Blood Groups</h3>
                            <p>Available blood groups will be displayed here</p>
                        </section>
                    </div>
                </section> 
                </div>
            </div>
        )
    }

    
}


