import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav,  } from 'reactstrap';
import { NavLink, Switch, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
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
import AdminViewDonations from './Admin/AdminViewDonations';
import UpdateDonationStatus from './Admin/UpdateDonationStatus';
import AdminViewRequests from './Admin/AdminViewRequests';
import AdminViewUsers from './Admin/AdminViewUsers';
import AdminBloodBank from './Admin/AdminBloodBank';
import AdminAddBloodBank from './Admin/AdminAddBloodBank';
import AdminViewUserDetails from './Admin/AdminViewUserDetails';
import UpdateBloodBank from './Admin/UpdateBloodBank';
import UpdateUserRole from'./Admin/UpdateUserRole';

export default function NavBarAdmin(props) {

    return (

        <div>
            <Navbar color='dark' dark expand='md'>
            <Nav id="nav" className='mr-auto' >
                    <ul id="navul">
                       <NavItem id="navitem">
                            <Link to='/admindash/nav'>Admin Profile</Link>
                            <ul>
                                <Link to='/admindash/viewprofiledetails' id="navlist">View Profile</Link>
                                <Link to='/admindash/profile' id="navlist">Edit Profile</Link>
                            </ul>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/admindash/adminviewusers'>Users List</NavLink>
                        </NavItem >
                        <NavItem id="navitem">
                            <NavLink to='/admindash/adminviewdonations'>Donations List</NavLink>
                        </NavItem >
                        <NavItem id="navitem">
                            <NavLink to='/admindash/adminviewrequests'>Requests List</NavLink>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/admindash/nav'>Blood Bank</NavLink>
                            <ul>
                                <Link to='/admindash/adminaddbloodbank' id="navlist">Add Blood Bank</Link>
                                <Link to='/admindash/adminbloodbanks' id="navlist">View Blood Banks</Link>
                            </ul>
                        </NavItem>
                    </ul>
                </Nav>
                <NavbarText>
                    <Button onClick= {() => this.props.history.push('/')} color='warning' > Logout</Button>
                </NavbarText>
            </Navbar>
            <Switch>
                <PrivateRoute path='/admindash/adddonation' component={AddDonation} />
                <PrivateRoute path='/admindash/viewdonations' component={ViewDonations} />
                <PrivateRoute path='/admindash/addrequest' component={AddRequest} />
                <PrivateRoute path='/admindash/viewrequests' component={ViewRequests} />
                <AdminRoute path='/admindash/profile' component={Profile} />
                <PrivateRoute path='/admindash/viewprofiledetails' component={ViewProfileDetails} />
                <PrivateRoute path='/admindash/bloodBank' component={BloodBank} />
                <PrivateRoute path='/admindash/updaterequests/:id' component={UpdateRequests} />
               <PrivateRoute path='/admindash/updatedonations/:id' component={UpdateDonations} />
               <PrivateRoute path='/admindash/viewrequestdetails/:id' component={ViewRequestDetails} />
               <AdminRoute path='/admindash/adminviewdonations' component={AdminViewDonations} />
               <AdminRoute path='/admindash/updatedonationstatus/:id' component={UpdateDonationStatus} />
               <AdminRoute path='/admindash/adminviewrequests' component={AdminViewRequests} />
               <AdminRoute path='/admindash/adminviewusers' component={AdminViewUsers} />
               <AdminRoute path='/admindash/adminbloodbanks' component={AdminBloodBank} />
               <AdminRoute path='/admindash/adminaddbloodbank' component={AdminAddBloodBank} />
               <AdminRoute path='/admindash/updatebloodbank/:id' component={UpdateBloodBank} />
               <AdminRoute path='/admindash/viewuserdetails/:id' component={AdminViewUserDetails}/>
               <AdminRoute path='/admindash/updateuserrole/:id' component={UpdateUserRole}/>


               <Route path = '/login' component={Login}/>
              
            </Switch>
        </div>
    )
}

