## 版本

- node: `v14.x`
- npm: `v6.x`
- nuxtjs: `v2.15.8`

## 使用

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## $axios

```js
// 在文件夹 ~/requests/api 下，定义请求方法
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

// 项目中在客户端实例使用
this.$requests.article.getArticleList({
  page: 1,
})

// 项目中在 SSR context 使用
context.app.$requests.article.getArticleList({
  page: 1,
})
```
