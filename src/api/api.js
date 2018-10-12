import httpClient from './httpClient'

// HttpClient
const baseURL = 'http://localhost:5001'
export const httpApi = {
  buildUrl(path) {
    return `${baseURL}/${path}`
  },
  getData() {
    return httpClient.get(this.buildUrl('my-endpoint'))
  },
  postData() {
    return httpClient.post(this.buildUrl('my-endpoint'))
  },
  putData() {
    return httpClient.put(this.buildUrl('my-endpoint'))
  }
}

// Apollo Client
