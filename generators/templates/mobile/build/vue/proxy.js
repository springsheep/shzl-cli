module.exports = {
    '/mock': {
        target: 'http://10.32.86.47:8300',
        // 域名
        changOrigin: true
    },
    '/citymanagement': {
        // target: "http://195.195.9.166:8084", // 域名
        target: "http://10.10.77.52:8089",
        //target:"http://10.12.107.48:8084",
        changOrigin: true
    }
}
