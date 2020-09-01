import React from 'react'
import { Navbar, NavItem, NavbarText, Button, Nav, } from 'reactstrap';
import { NavLink, Switch, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DonateBlood from './dashboard/DonateBlood';
import RequestBlood from './dashboard/RequestBlood';
import BloodBank from './dashboard/BloodBank';
import Profile from './Profile';

export default function NavBar(props) {

    return (

        <div>
            <Navbar color='dark' dark expand='md'>
                <Nav className='mr-auto'>
                    <NavItem>
                        <Link to='/dash/profile'>User Pofile</Link>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/donations'>DonateBlood</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/requests'>Request Blood</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/dash/bloodBank'>Blood Bank</NavLink>
                    </NavItem>
                    
                </Nav>
                <NavbarText>
                    <Button onClick={props.handleLogout} color='warning'>Logout</Button>
                </NavbarText>
            </Navbar>
            <Switch>
                <PrivateRoute path='/dash/donations' component={DonateBlood} />
                <PrivateRoute path='/dash/requests' component={RequestBlood} />
                <PrivateRoute path='/dash/profile' component={Profile} />
                <PrivateRoute path='/dash/bloodBank' component={BloodBank} />
              
            </Switch>
        </div>
    )
}

