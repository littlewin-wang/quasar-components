import API from '../api/index'

export const getIssues = ({ commit }) => {
  API.IssuesResource().then(res => {
    if (res.statusText === 'OK') {
      commit('ADD_ISSUES', res.data)
    }
  })
}
