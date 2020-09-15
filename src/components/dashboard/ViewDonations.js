import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'

export default class ViewDonations extends Component {
  constructor(props){

    super(props)

    this.state = {
      donatebloods: [],
      donationId:'',
      weight: '',
      country: '',
      state: '',
      district: '',
      city: '',
      street: '',
      location: '',
      status: '',
        config: {
            headers: { 'Authorization': localStorage.getItem('token') }
        }
    }
  }

  handleDelete = (id) => {
	Axios.delete('http://localhost:3000/api/DonateBlood/' + id, this.state.config)
	.then((res)=> {
		const filteredDonateBlood = this.state.donatebloods.filter(req => {
			return req._id !== id;
		});
		console.log(filteredDonateBlood);
		this.setState({
			donatebloods: filteredDonateBlood
		});
	 
	}).catch(err => console.log(err.response));
  }

  handleUpdateClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/userdash/updatedonations/${id}`);
  }

componentDidMount(){
  Axios.get('http://localhost:3000/api/DonateBlood', this.state.config)
  .then((res)=> {
    console.log(res.data)
    this.setState({
      donatebloods: res.data
    })
  }).catch(err => console.log(err.response));
}

render() {
  return (
      <div className='container'>
         
         <div className="py-4">
        <h1>Donation List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Full Address</th>
              <th scope="col"> Weight</th>
              <th scope="col"> Prefer Location</th>
              <th scope="col"> Blood Status</th>
        
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.donatebloods.map(donation => (
              <tr key= {donation._id}>
                <th scope="row"></th>
            <td>{donation.country},
            {donation.state}, {donation.district},
            {donation.city}, {donation.street}
            </td>
            <td>{donation.weight}</td>
            <td>{donation.location}</td>
                <td>{donation.status}</td>
                <td>
                
                  <Link class="btn btn-outline-primary mr-2"
                  onClick={() => this.handleUpdateClick(donation._id)}>
                    Edit
                  </Link>
                  <Link class="btn btn-danger"
                  onClick={() => this.handleDelete(donation._id)}>Delete</Link>
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






