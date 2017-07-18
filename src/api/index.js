let axios = require('axios')

const API_ROOT = '/api'
axios.default.withCredentials = true

// export API interface
export default {
  IssuesResource () {
    return axios.get(API_ROOT.concat('issues'))
  }
}
