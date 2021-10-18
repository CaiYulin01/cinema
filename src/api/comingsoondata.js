import request from '@/utils/request'

export function comingsoonAPI () {
  return request({
    url: 'gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=625706',
    method: 'GET',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16335854152126803380469761","bc":"440100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
