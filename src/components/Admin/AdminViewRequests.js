import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'
import NavBarAdmin from '../NavBarAdmin'

export default class AdminViewRequests extends Component {
  constructor(props){

    super(props)

    this.state = {
      requestbloods: [],
      requestId:'',
        patientName: '',
        patientAge: '',
        bloodGroup:'',
        country: '',
        state: '',
        district: '',
        City: '',
        street: '',
        hospitalName:'',
        location: '',
        needUnit: '',
        requirement:'',
        requirementReason:'',
        requireBefore:'',
        config: {
            headers: { 'Authorization': localStorage.getItem('token') }
        }
    }
  }

  handleDelete = (id) => {
    if(window.confirm('Are you sure to remove this request from the list?'))
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
	  this.props.history.push(`/admindashboard/updaterequest/${id}`);
  }
  handleViewClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/admindashboard/viewrequestdetails/${id}`);
  }


componentDidMount(){
  Axios.get('http://localhost:3000/api/admin/requests', this.state.config)
  .then((res)=> {
    console.log(res.data)
    this.setState({
      requestbloods: res.data
    })
  }).catch(err => console.log(err.response));
}

render() {
  return (
    <div>
      <NavBarAdmin/>
    
      <div className='container'>
         
         <div className="py-4">
        <h1>Request List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              <th scope="col"> Blood Group</th>
              <th scope="col"> Hospital Name</th>
              <th scope="col"> Required Before</th>
        
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requestbloods.map(request => (
              <tr key= {request._id}>
                <th scope="row"></th>
            <td>{request.patientName}</td>
            <td>{request.bloodGroup}</td>
            <td>{request.hospitalName}</td>
                <td>{request.requireBefore}</td>
                <td>
                  <Link class="btn btn-primary mr-2"
                  onClick={() => this.handleViewClick(request._id)}>
                    View
                  </Link>
                  <Link onClick={() => this.handleUpdateClick(request._id)}
                    class="btn btn-outline-primary mr-2"
                
                  >
                    Edit
                  </Link>
                  <Link class="btn btn-danger" onClick={() => this.handleDelete(request._id)}>
                    Delete
                  </Link>
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
  )
}
}






