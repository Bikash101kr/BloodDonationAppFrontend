import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'

export default class AdminViewUsers extends Component {
  constructor(props){

    super(props)

    this.state = {
      users: [],
      userId:'',
        username: '',
        firstName: '',
        lastName:'',
        phone: '',
        address: '',
        role: '',
        config: {
            headers: { 'Authorization': localStorage.getItem('token') }
        }
    }
  }

  handleDelete = (id) => {
	Axios.delete('http://localhost:3000/api/RequestBlood/' + id, this.state.config)
	.then((res)=> {
		const filteredReqBlood = this.state.requestbloods.filter(req => {
			return req._id !== id;
		});
		console.log(filteredReqBlood);
		this.setState({
			requestbloods: filteredReqBlood
		});
	 
	}).catch(err => console.log(err.response));
  }

  handleUpdateClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/dash/updaterequests/${id}`);
  }
  handleViewClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/dash/viewrequestdetails/${id}`);
  }


componentDidMount(){
  Axios.get('http://localhost:3000/api/admin/users', this.state.config)
  .then((res)=> {
    console.log(res.data)
    this.setState({
      users: res.data
    })
  }).catch(err => console.log(err.response));
}

render() {
  return (
      <div className='container'>
         
         <div className="py-4">
        <h1>Users List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
              <th scope="col">Full Name</th>
              <th scope="col">Phone</th>
              <th scope="col"> Address</th>
              <th scope="col"> Role</th>
        
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key= {user._id}>
                <th scope="row"></th>
            <td>{user.username}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
                <td>{user.role}</td>
                <td>
                  <Link class="btn btn-primary mr-2"
                  onClick={() => this.handleViewClick(user._id)}>
                    View
                  </Link>
                  <Link onClick={() => this.handleUpdateClick(user._id)}
                    class="btn btn-outline-primary mr-2"
                
                  >
                    Edit
                  </Link>
                  <Link class="btn btn-danger" onClick={() => this.handleDelete(user._id)}>
                    Delete
                  </Link>
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
  )
}
}






