export default ({ app, store, redirect, req }) => {
  app.router.beforeEach(async (to, from, next) => {
    next()
  })
  app.router.afterEach((to, from) => {})
}
