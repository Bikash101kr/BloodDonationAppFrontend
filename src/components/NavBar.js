import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav, } from 'reactstrap';
import { NavLink, Switch, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddDonation from './dashboard/AddDonation';
import ViewDonations from './dashboard/ViewDonations';
import ViewRequests from './dashboard/ViewRequests';
import AddRequest from './dashboard/AddRequest';
import UpdateRequests from './dashboard/UpdatedRequest';
import UpdateDonations from './dashboard/UpdatedDonation';
import BloodBank from './dashboard/BloodBank';
import Profile from './Profile';
import ViewRequestDetails from './dashboard/ViewRequestDetails';

export default function NavBar(props) {

    return (

        <div>
            <Navbar color='dark' dark expand='md'>
                <Nav className='mr-auto' vertical navbar>
                    <NavItem>
                        <Link to='/dash/profile'>User Pofile</Link>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/donations'>Add Donation</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/viewdonations'> View Donations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/requests'>Add Request </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/viewrequests'> View Requests</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/bloodBank'>Blood Bank</NavLink>
                    </NavItem>
					<NavItem>
                        <NavLink to='/dash/updaterequests'>Update Requests</NavLink>
                    </NavItem>
                    
                </Nav>
                <NavbarText>
                    <Button onClick={props.handleLogout} color='warning'>Logout</Button>
                </NavbarText>
            </Navbar>
            <Switch>
                <PrivateRoute path='/dash/donations' component={AddDonation} />
                <PrivateRoute path='/dash/viewdonations' component={ViewDonations} />
                <PrivateRoute path='/dash/requests' component={AddRequest} />
                <PrivateRoute path='/dash/viewrequests' component={ViewRequests} />
                <PrivateRoute path='/dash/profile' component={Profile} />
                <PrivateRoute path='/dash/bloodBank' component={BloodBank} />
                <PrivateRoute path='/dash/updaterequests/:id' component={UpdateRequests} />
               <PrivateRoute path='/dash/updatedonations/:id' component={UpdateDonations} />
               <PrivateRoute path='/dash/viewrequestdetails/:id' component={ViewRequestDetails} />
              
            </Switch>
        </div>
    )
}

