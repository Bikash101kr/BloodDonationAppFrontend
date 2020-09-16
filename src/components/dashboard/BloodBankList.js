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
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Blood Bank Name</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.bloodbanks.map(bloodbank => (
              <tr key= {bloodbank._id}>
                <th scope="row"></th>
            <td>{bloodbank.BloodBankName}
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






