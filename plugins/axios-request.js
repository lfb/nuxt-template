import apis from '~/request/index'
export default (ctx, inject) => {
  const requests = {}
  for (const i in apis) {
    if (typeof apis[i] === 'function') {
      requests[i] = apis[i](ctx.$axios)
    }
  }

  inject('requests', requests)
}
