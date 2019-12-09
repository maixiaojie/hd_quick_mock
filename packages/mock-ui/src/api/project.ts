import request from '@/utils/request'

export const addProject = (data) => {
  return request({
    url: `/project/add`,
    method: 'post',
    data
  })
}
export const getProjet = (id) => {
  return request({
    url: `/project/get/${id}`,
    method: 'get'
  })
}