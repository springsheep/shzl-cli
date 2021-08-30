// 获取地址栏token值
function getQueryString(name) {
  const reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.href.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export {
  getQueryString
}
