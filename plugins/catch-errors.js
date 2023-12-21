import Vue from 'vue'

export default (context) => {
    const { app, $sentry } = context
    const isPro =
        process.env.NUXT_APP_ENV === 'production' ||
        process.env.NUXT_APP_ENV === 'release'

    Vue.prototype.$errorMonitoring = (error) => {
        const title = '$errorMonitoring'

        if (isPro) {
            // TODO - 上报给错误系统
        } else {
            console.error(title, error)
        }
    }

    // 指定组件的渲染和观察期间未捕获错误的处理函数
    Vue.config.errorHandler = (err, vm, info) => {
        const title = 'Vue.config.errorHandler'
        const errorData = {
            from: title,
            err,
            info,
        }
        if (!isPro) {
            // TODO - 上报给错误系统
        } else {
            console.error(title, err, vm, info)
        }
    }

    // 当JavaScript运行时错误（包括语法错误）发生时，window会触发一个ErrorEvent接口的error事件，并执行window.onerror()。
    window.onerror = (message, source, lineno, colno, error) => {
        const errorData = {
            message,
        }
        const title = 'window.onerror'
        if (!isPro) {
            console.error(title, message, source, lineno, colno, error)
        } else {
            // TODO - 上报给错误系统
        }
    }

    // 监听js运行时错误事件，会比window.onerror先触发，与onerror的功能大体类似，
    // 不过事件回调函数传参只有一个保存所有错误信息的参数，不能阻止默认事件处理函数的执行，但可以全局捕获资源加载异常的错误
    window.addEventListener(
        'error',
        (event) => {
            const title = 'window.addEventListener.error'
            if (!isPro) {
                console.error(title, event.error)
            } else {
                // TODO - 上报给错误系统
            }
        },
        true
    )

    // 当Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件；
    window.addEventListener('unhandledrejection', (error) => {
        const title = 'window.addEventListener.unhandledrejection'
        const errorData = {
            error,
        }

        if (!isPro) {
            console.error(title, error)
        } else {
            // TODO - 上报给错误系统
        }
    })
}
