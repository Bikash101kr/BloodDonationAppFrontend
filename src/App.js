import React from 'react';
import './App.css';
import './components/css/style.css'
import './components/css/skel.css'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NoMatch from './components/NoMatch';
import AdminDash from './components/dashboard/AdminDash';
import AdminRoute from './components/AdminRoute';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/Profile'
import AddDonation from './components/dashboard/AddDonation';
import ViewDonations from './components/dashboard/ViewDonations';
import AddRequest from './components/dashboard/AddRequest';
function App() {
  return (
    <div>
<BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path='/'  component={Dashboard} />
          <AdminRoute path='/admin' component={AdminDash} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/dashboard/AddDonation' component={AddDonation} />
          <PrivateRoute path='/dashboard/ViewDonations' component={ViewDonations} />
          <PrivateRoute path='/dashboard/AddRequest' component={AddRequest} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
