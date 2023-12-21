import articleUrl from '~/request/url/article'

export default (axios) => ({
  // 获取文章列表
  getArticleList(params) {
    return axios
      .get(articleUrl.articleList, { params })
      .then((res) => [null, res])
      .catch((err) => [err, null])
  },
})
