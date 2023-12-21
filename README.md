## 版本

-   node: `v14.x`
-   npm: `v6.x`
-   nuxtjs: `v2.15.8`

## 内容

-   vuex：在`~/store/*`下新建模块文件即可
-   网络请求方法：在 `~/requests/*`下新建模块文件即可
-   全局公共方法：`this.$isObject, this.$isArray, this.$cloneDeep`
-   全局环境变量：`env`
-   cookie: `this.$cookies.set... `
-   CSS 扩展语：`scss`
-   全局捕获错误方法: `~/pulgins/catch-errors.js`

## 使用

拉取项目

```bash
git clone https://github.com/lfb/nuxt-template.git your_project_name
```

安装启动

```bash
# 安装依赖
$ yarn install

# 启动项目，在 localhost:3000 访问
$ yarn dev

# 打包项目
$ yarn build

# 打包完成后，可以运行
$ yarn start
```

## 网络请求示例

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
this.$requests.article.getArticleList({ page: 1 })

// 项目中在 SSR context 使用
context.app.$requests.article.getArticleList({ page: 1 })

// 具体：
const [err, data] = await this.$requests.article.getArticleList({ page: 1 })
if (!error) {
    console.log('data', data)
}
```
