import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'

export default class BloodBanks extends Component {
  constructor(props){

    super(props)

    this.state = {
      bloodbanks: [],
      bloodbankId:'',
      BloodBankName: '',
      availableBloodGroup:'',
        config: {
            headers: { 'Authorization': localStorage.getItem('token') }
        }
    }
  }

  handleDelete = (id) => {
	Axios.delete('http://localhost:3000/api/BloodBank/' + id, this.state.config)
	.then((res)=> {
		const filteredBloodBank = this.state.bloodbanks.filter(req => {
			return req._id !== id;
		});
		console.log(filteredBloodBank);
		this.setState({
			bloodbanks: filteredBloodBank
		});
	 
	}).catch(err => console.log(err.response));
  }

  handleUpdateClick = (id) => {
	  console.log(id)
	  this.props.history.push(`/admindash/updatebloodbanks/${id}`);
  }

componentDidMount(){
  Axios.get('http://localhost:3000/api/BloodBank', this.state.config)
  .then((res)=> {
    console.log(res.data)
    this.setState({
      bloodbanks: res.data
    })
  }).catch(err => console.log(err.response));
}

render() {
  return (
      <div className='container'>
         
         <div className="py-4">
        <h1>Blood Bank List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Blood Bank Name</th>
              <th scope="col">Available Blood Group</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.bloodbanks.map(bloodbank => (
              <tr key= {bloodbank._id}>
                <th scope="row"></th>
            <td>{bloodbank.BloodBankName}
            </td>
            <td>{bloodbank.availableBloodGroup}
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






