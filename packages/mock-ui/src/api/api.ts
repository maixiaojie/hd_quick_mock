import request from '@/utils/request'

export const addApi = (data) => {
  return request({
    url: `/add`,
    method: 'post',
    data
  })
}