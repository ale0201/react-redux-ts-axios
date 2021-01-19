import axios from "axios";

function getHeaders() {
  return {
    token: 'ClnuGtCsr1+r8vc1OIsD//YSJVHtfLUZPTgGFeOSuS4*',
    uToken:
      'Eb9TYIjDGsarPd333mZKecctAocHXPeyLMnJZPRN7DqrIL33b8wbSYRsdGTzmil9Ci/SwQLsfH18hq69b4MbSM6CmpIBoMghvGxES6A3IgVqxCDas81xbQhWjPC626aE',
    'Op-Station':
      'XF2,MP:16258588555,MAC:02:00:00:00:00:00,uuid/imei:4587E891-790C-49B6-8F73-E21CB610A253,OS:iOS,Ver:7.20.0,IP:192.168.1.178',
  }
}

const request = axios.create()
axios.defaults.timeout = 10000
request.interceptors.request.use(
  config => {
    config.headers = { ...getHeaders(), ...config.headers }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res: any = response.data
    if (res.status === 'success') {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

class HttpRequest {
  static async get(url: string, params: object) {
      return await request.get(url, { params: params })
  }
  static async post(url: string, params: object) {
      request.defaults.headers = {
          'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
      return await request.post(url, params)
  }
  static async postJson(url: string, params: object) {
      request.defaults.headers = {
          'Content-type': 'application/json;charset=UTF-8'
      }
      return await request.post(url, params)
  }
}
export default HttpRequest

