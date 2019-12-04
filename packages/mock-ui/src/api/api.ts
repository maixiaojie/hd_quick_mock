import request from '@/utils/request'

let baseUrl = 'http://localhost:3001/api'
export const addApi = (data) => {
  return request({
    url: `${baseUrl}/add`,
    method: 'post',
    data
  })
}