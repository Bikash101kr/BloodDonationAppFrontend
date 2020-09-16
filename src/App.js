import React from 'react';
import './App.css';
import './components/css/style.css'
import './components/css/skel.css'
import './components/NavBar'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NoMatch from './components/NoMatch';
import AdminDash from './components/Admin/AdminDash';
import AdminRoute from './components/AdminRoute';
import UserDashboard from './components/dashboard/UserDashboard';
import Profile from './components/Profile'
import ViewProfileDetails from'./components/ViewProfileDetails';
import AddDonation from './components/dashboard/AddDonation';
import ViewDonations from './components/dashboard/ViewDonations';
import AddRequest from './components/dashboard/AddRequest';
import ViewRequests from './components/dashboard/ViewRequests';
import BloodBank from './components/dashboard/BloodBank';
import ViewRequestDetails from './components/dashboard/ViewRequestDetails';
import UpdatedDonation from './components/dashboard/UpdatedDonation';
import UpdatedRequest from './components/dashboard/UpdatedRequest';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
<BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path='/userdash/'  component={UserDashboard} />
          
          <PrivateRoute path='/userdashboard/adddonation' component={AddDonation} />
          <PrivateRoute path='/userdashboard/viewdonations' component={ViewDonations} />
          <PrivateRoute path='/userdashboard/addrequest' component={AddRequest} />
          <PrivateRoute path='/userdashboard/viewrequests' component={ViewRequests} />
          <PrivateRoute path='/userdashboard/profile/:id' component={Profile} />
          <PrivateRoute path='/userdashboard/viewprofiledetails' component={ViewProfileDetails} />
          <PrivateRoute path='/userdashboard/bloodbank' component={BloodBank} />
          <PrivateRoute path='/userdashboard/updaterequest/:id' component={UpdatedRequest} />
          <PrivateRoute path='/userdashboard/updatedonation/:id' component={UpdatedDonation} />
          <PrivateRoute path='/userdashboard/viewrequestdetails/:id' component={ViewRequestDetails} />
        
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
