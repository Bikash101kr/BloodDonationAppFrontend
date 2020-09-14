import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav,  } from 'reactstrap';
import { NavLink, Switch, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddDonation from './dashboard/AddDonation';
import ViewDonations from './dashboard/ViewDonations';
import ViewRequests from './dashboard/ViewRequests';
import AddRequest from './dashboard/AddRequest';
import UpdateRequests from './dashboard/UpdatedRequest';
import UpdateDonations from './dashboard/UpdatedDonation';
import BloodBank from './dashboard/BloodBank';
import Profile from './Profile';
import ViewProfileDetails from './ViewProfileDetails';
import ViewRequestDetails from './dashboard/ViewRequestDetails';
import Login from './Login';

export default function NavBar(props) {

    return (

        <div>
            <Navbar color='dark' dark expand='md'>
            <Nav id="nav" className='mr-auto' >
                    <ul id="navul">
                       <NavItem id="navitem">
                            <Link to='/userdash/nav'>User Profile</Link>
                            <ul>
                                <Link to='/userdash/viewprofiledetails' id="navlist">View Profile</Link>
                                <Link to='/userdash/profile' id="navlist">Edit Profile</Link>
                            </ul>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/userdash/nav'>Donate Blood</NavLink>
                            <ul>
                                <Link to='/userdash/viewdonations' id="navlist">View Donations</Link>
                                <Link to='/userdash/adddonation' id="navlist">Add Donation</Link>
                            </ul>
                        </NavItem >
                        <NavItem id="navitem">
                            <NavLink to='/userdash/nav'>Request Blood</NavLink>
                            <ul>
                                <Link to='/userdash/viewrequests' id="navlist">View Requests</Link>
                                <Link to='/userdash/addrequest' id="navlist">Add Request</Link>
                            </ul>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/userdash/bloodBank'>Blood Bank</NavLink>
                        </NavItem>
                    </ul>
                </Nav>
                <NavbarText>
                    <Button onClick= {() => this.props.history.push('/login')} color='warning' > Logout</Button>
                </NavbarText>
            </Navbar>
            <Switch>
                <PrivateRoute path='/dash/adddonation' component={AddDonation} />
                <Route path='/dash/viewdonations' component={ViewDonations} />
                <PrivateRoute path='/dash/addrequest' component={AddRequest} />
                <PrivateRoute path='/dash/viewrequests' component={ViewRequests} />
                <PrivateRoute path='/dash/profile' component={Profile} />
                <PrivateRoute path='/dash/viewprofiledetails' component={ViewProfileDetails} />
                <PrivateRoute path='/dash/bloodBank' component={BloodBank} />
                <PrivateRoute path='/dash/updaterequests/:id' component={UpdateRequests} />
               <PrivateRoute path='/dash/updatedonations/:id' component={UpdateDonations} />
               <PrivateRoute path='/dash/viewrequestdetails/:id' component={ViewRequestDetails} />
               <Route path = '/login' component={Login}/>
              
            </Switch>
        </div>
    )
}

