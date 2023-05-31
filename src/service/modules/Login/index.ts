import Request from '../../index'
import { loginType } from './type'

export function login(data: loginType) {
  return Request.post({
    url: '/login',
    data,
    showLoading: false
  })
}
