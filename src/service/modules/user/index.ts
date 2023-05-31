import Request from '../../index'

export async function userInfo() {
  const result = await Request.get({
    url: '/users',
    showLoading: true
  })
  console.log(result)
}
