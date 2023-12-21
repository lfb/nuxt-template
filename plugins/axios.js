import qs from 'qs'

export default ({ $axios, redirect, store, app, error, $sentry, route }) => {
  $axios.onRequest((config) => {
    return config
  })
  $axios.onResponse((response) => {
    const rejectData = {
      data: response.data,
      statusCode: response.status,
      code: response.data.code,
      message: response.data.message,
      requestUrl: {
        url: response.config.baseURL + response.config.url,
        method: response.config.method,
        params: response.config.params,
        data: response.config.data,
      },
    }

    if (response.status === 200) {
      if (response.data.code === 200) {
        console.log(response.data)
      }
    }
  })
  $axios.onError((err) => {
    // 超时
    if (err.code === 'ECONNABORTED') {
      console.error('Request Timed Out, Please Try Again')
    }
  })
}
