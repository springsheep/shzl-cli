import request from '@/utils/request'

function createAPI(baseURL) {
    return function (conf) {
        conf = conf || {}
        return request(Object.assign({}, {
            url: conf.url,
            baseURL: baseURL,
            method: conf.method
        }, conf.opts))
    }
}

function convertRESTAPI(url, opts) {
    if (!opts || !opts.path) return url

    const pathKeys = Object.keys(opts.path)

    pathKeys.forEach((key) => {
        const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
        url = url.replace(r, opts.path[key])
    })

    return url
}

export {
    createAPI,
    convertRESTAPI
}
