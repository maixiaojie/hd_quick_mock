import request from '@/utils/request'

export const addProject = (data) => {
  return request({
    url: `/project/add`,
    method: 'post',
    data
  })
}