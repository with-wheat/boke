import Request from '../../index'

export function userInfo() {
  return Request.get({
    url: '/users',
    showLoading: true
  })
}
