import Axios from 'axios'

const request = (method, url, data) => {
  return Axios.request({
    method,
    url,
    data
  })
}

// Get request + adds the token saved in store as url-param
export const get = (url, data) => {
  return request('GET', url, data)
}

// post request + adds the token saved in store as url-param
export const post = (url, payload = {}) => {
  return request('POST', url, payload)
}

export const put = (url, data = {}) => {
  return request('PUT', url, data)
}

export default {
  get,
  post,
  put
}
