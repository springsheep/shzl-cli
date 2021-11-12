module.exports = {
    // webpack build externals
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
    },
    css: [],
    // https://unpkg.com/browse/vue@2.6.10/
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
    ]
}
