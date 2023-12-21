/**
 * 判断是否为对象
 *
 * @param obj
 * @returns {boolean}
 */
const isObject = (obj) => {
    const isObject = Object.prototype.toString.call(obj) === '[object Object]'
    if (isObject) {
        return Object.keys(obj).length > 0
    }

    return isObject
}

/**
 * 判断是否为数组
 * @param arr
 * @returns {boolean}
 */
const isArray = (arr) => {
    const isArray = Object.prototype.toString.call(arr) === '[object Array]'
    if (isArray) {
        return arr.length > 0
    }

    return isArray
}

/**
 * 深拷贝
 * @param data
 * @returns {{}}
 */
const cloneDeep = (data) => {
    const root = {}

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data,
        },
    ]

    while (loopList.length) {
        // 深度优先
        const node = loopList.pop()
        const parent = node.parent
        const key = node.key
        const data = node.data

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent
        if (typeof key !== 'undefined') {
            res = parent[key] = {}
        }

        for (const k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    })
                } else {
                    res[k] = data[k]
                }
            }
        }
    }

    return root
}

export default ({ app }, inject) => {
    // this.$isObject('works in mounted')
    // context.app.$isObject('works with context')
    inject('isObject', isObject)
    inject('isArray', isArray)
    inject('cloneDeep', cloneDeep)
}
