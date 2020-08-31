
import axios from 'axios'
export const getUser = id => {
    return axios
      .get(`users/getuser/${id}`)
      .then(response => {
        return response
      })
      .catch(err => {
        return err
      })
  }