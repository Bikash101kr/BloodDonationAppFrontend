import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';


export default class BloodBankList extends Component {
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
  handleUpdateClick = (id) => {
    console.log(id)
    this.props.history.push(`/admindashboard/updatebloodbank/${id}`);
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
    <div>
 
    
      <div className='container'>
         <div className="py-table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Blood Bank Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bloodbanks.map(bloodbank => (
              <tr key= {bloodbank._id}>
                <th scope="row"></th>
            <td>{bloodbank.BloodBankName}
            </td>
            <td>
              <Link class="mr-2" to = '/admindashboard/adminbloodbanks' > Edit</Link>
                  
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






