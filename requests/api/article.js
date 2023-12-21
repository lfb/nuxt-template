import articleUrl from '~/requests/url/article'

export default (axios) => ({
    // 获取文章列表
    // 使用：this.$requests.article.getArticleList({})
    getArticleList(params) {
        return axios
            .get(articleUrl.articleList, { params })
            .then((res) => [null, res])
            .catch((err) => [err, null])
    },
})
