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
import AdminViewDonations from './components/Admin/AdminViewDonations';
import UpdateDonationStatus from './components/Admin/UpdateDonationStatus';
import AdminViewRequests from './components/Admin/AdminViewRequests';
import AdminViewUsers from './components/Admin/AdminViewUsers';
import AdminBloodBank from './components/Admin/AdminBloodBank';
import AdminAddBloodBank from './components/Admin/AdminAddBloodBank';
import AdminViewUserDetails from './components/Admin/AdminViewUserDetails';
import UpdateBloodBank from './components/Admin/UpdateBloodBank';
import UpdateUserRole from'./components/Admin/UpdateUserRole';
import UpdateProfile from './components/Admin/UpdateProfile';
import ViewProfile from './components/Admin/ViewProfile';
import AdminViewRequestDetails from './components/Admin/AdminViewRequestDetails';
import AdminUpdateRequest from './components/Admin/AdminUpdateRequest';
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

          <AdminRoute path='/admindash/'  component={AdminDash} />
          <AdminRoute path='/admindashboard/updateprofile/' component={UpdateProfile} />
          <AdminRoute path='/admindashboard/viewprofile' component={ViewProfile} />
          <AdminRoute path='/admindashboard/updatedonationstatus/:id' component={UpdateDonationStatus} />
               <AdminRoute path='/admindashboard/adminviewrequests' component={AdminViewRequests} />
               <AdminRoute path='/admindashboard/adminviewusers' component={AdminViewUsers} />
               <AdminRoute path='/admindashboard/adminbloodbanks' component={AdminBloodBank} />
               <AdminRoute path='/admindashboard/adminaddbloodbank' component={AdminAddBloodBank} />
               <AdminRoute path='/admindashboard/updatebloodbank/:id' component={UpdateBloodBank} />
               <AdminRoute path='/admindashboard/viewuserdetails/:id' component={AdminViewUserDetails}/>
               <AdminRoute path='/admindashboard/updateuserrole/:id' component={UpdateUserRole}/>
               <AdminRoute path='/admindashboard/adminviewdonations' component={AdminViewDonations} />
               <AdminRoute path='/admindashboard/adminviewrequestdetails/:id' component={AdminViewRequestDetails} />
               <AdminRoute path ='/admindashboard/adminupdaterequest/:id' component={AdminUpdateRequest}/>
        
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
