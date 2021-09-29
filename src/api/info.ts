import request from '@/utils/request'

export function getInfo (username: string) {
  return request({
    url: '/user',
    method: 'get',
    params: {
      username: username
    }
  })
}

export function getInfoById (id: number) {
  return request({
    url: '/user/u',
    method: 'get',
    params: {
      id: id
    }
  })
}
