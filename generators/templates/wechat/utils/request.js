const GET = "GET";
const POST = "POST";
const FORM = "FORM";

const baseURL = "http://10.10.56.78:8080/";

function request(method, url, data) {
  return new Promise(function (resolve, reject) {
    let header = {
      "content-type": "application/json",
    };
    wx.request({
      url: baseURL + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header: header,
      success(res) {
        //请求成功
        //判断状态码---errCode状态根据后端定义来判断
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          //其他异常
          reject("运行时错误,请稍后再试");
        }
      },
      fail(err) {
        //请求失败
        reject(err);
      },
    });
  });
}
module.exports = {
  request
}
