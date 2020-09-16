import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav,  } from 'reactstrap';
import { NavLink, Switch, Link } from 'react-router-dom';

export default function NavBar(props) {

    return (

        <div>
            <Navbar color='dark' dark expand='md'>
            <Nav id="nav" className='mr-auto' >
                    <ul id="navul">
                    <NavItem id="navitem">
                            <Link to='/userdash/nav'>Dashboard</Link>                            
                        </NavItem>
                       <NavItem id="navitem">
                            <Link to='/userdash/nav'>User Profile</Link>
                            <ul>
                                <Link to='/userdashboard/viewprofiledetails' id="navlist">View Profile</Link>
                                <Link to='/userdashboard/profile/:id' id="navlist">Edit Profile</Link>
                            </ul>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/userdash/nav'>Donate Blood</NavLink>
                            <ul>
                                <Link to='/userdashboard/viewdonations' id="navlist">View Donations</Link>
                                <Link to='/userdashboard/adddonation' id="navlist">Add Donation</Link>
                            </ul>
                        </NavItem >
                        <NavItem id="navitem">
                            <NavLink to='/userdash/nav'>Request Blood</NavLink>
                            <ul>
                                <Link to='/userdashboard/viewrequests' id="navlist">View Requests</Link>
                                <Link to='/userdashboard/addrequest' id="navlist">Add Request</Link>
                            </ul>
                        </NavItem>
                        <NavItem id="navitem">
                            <NavLink to='/userdashboard/bloodBank'>Blood Bank</NavLink>
                        </NavItem>
                    </ul>
                </Nav>
                <NavbarText>
                    <Button onClick= {() => this.props.history.push('/login')} color='warning' > Logout</Button>
                </NavbarText>
            </Navbar>
            <Switch>
              
            </Switch>
        </div>
    )
}

