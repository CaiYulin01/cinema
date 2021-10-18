import request from '@/utils/request'

export function filmswipeAPI () {
  return request({
    url: 'gateway?type=2&cityId=440300&k=8023376',
    method: 'GET',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16335854152126803380469761"}',
      'X-Host': 'mall.cfg.common-banner'
    }
  })
}
