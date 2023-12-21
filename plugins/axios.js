import qs from 'qs'

export default ({ $axios, redirect, store, app, error, $sentry, route }) => {
  $axios.onRequest((config) => {
    config.baseURL = process.env.BASE_URL

    return config
  })
  $axios.onResponse((response) => {
    if (response.status === 200) {
      if (response.data.code === 200) {
        return Promise.resolve(response.data)
      }
    }

    return Promise.reject(response.data)
  })
  $axios.onError((err) => {
    // 超时
    if (err.code === 'ECONNABORTED') {
      console.error('Request Timed Out, Please Try Again')
    }
  })
}
