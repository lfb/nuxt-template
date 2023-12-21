/**
 * 设置 cookie 为 session 级别
 * 即是浏览器会话级别
 */
export function getCookiesSession() {
  const opts = {
    path: '/',
  }

  if (process.env.NODE_ENV !== 'development') {
    opts.domain = '.domain.com'
  }

  return opts
}
