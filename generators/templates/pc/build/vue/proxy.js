module.exports = {
    '^/oauth2': {
        target: "http://10.10.77.45:9000/",
        changeOrigin: true,
    },
    '^/api/admin': {
        target: "http://10.10.77.45:9000/",
        changeOrigin: true,
    }
}
