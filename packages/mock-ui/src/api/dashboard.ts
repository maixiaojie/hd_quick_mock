import request from '@/utils/request'

export const getData = () => {
  // return Api.getData()
}

export const getProjetList = (pageNum = 0, pageSize = 10) => {
  return request({
    url: `/project/list/${pageNum}/${pageSize}`,
    method: 'get'
  })
}