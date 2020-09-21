import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
export default class AdminUserList extends Component {
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
    <div>
    
      <div className='container'>
         
         <div className="py-table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
              <th scope="col"> Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key= {user._id}>
                <th scope="row"></th>
            <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
              <Link class="mr-2" to = '/admindashboard/adminviewusers' > Edit</Link>
                  
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






