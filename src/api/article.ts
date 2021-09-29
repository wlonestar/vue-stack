import request from '../utils/request'

// 分页查询文章
export function getArticleByPage (page: number, size: number) {
  return request({
    url: '/article',
    method: 'get',
    params: {
      page: page,
      size: size
    }
  })
}

// 查询所有文章
export function getAllArticle () {
  return request({
    url: '/article/all',
    method: 'get'
  })
}

// 根据 id 查询文章
export function getArticle (id: number) {
  return request({
    url: `/article/?id=${id}`,
    method: 'get'
  })
}

// 根据标题查询文章
export function getByTitle (title: string) {
  return request({
    url: `/article/p/?title=${title}`,
    method: 'get'
  })
}
