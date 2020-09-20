import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
export default class AvailableBlood extends Component {
    constructor(props){

        super(props)
    
        this.state = {
          donatebloods: [],
          donationId:'',
          bloodGroup: '',
          status: '',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
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
       <table class="table border shadow">
       <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Bloodgroup</th>
              <th scope="col"> Blood Status</th>
        
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.donatebloods.map(donation => (
              <tr key= {donation._id}>
                <th scope="row"></th>
            <td>{donation.bloodGroup}</td>
                <td>{donation.status}</td>
                <td>
                
                  <Link class=" mr-2"
                  onClick={() => this.handleUpdateClick(donation._id)}>
                    Request
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
    