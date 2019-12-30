import request from '@/utils/request'

export const get_github_login_url = () => {
  return request({
    url: `/login`,
    method: 'get'
  })
}