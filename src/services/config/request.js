import axios from 'axios'
import store from '@store'
import { API_URL } from './apiUrl'
const _authorizationHeaders = () => ({
  Authorization: store.state.login.authToken ? store.state.login.authToken : '',
  'Content-Type': 'application/json'
})

const handleError = err => {
  if (err.response.status > 200) {
    console.log('Api call error in services -> index.js' + err, err.status)
  }
}

export const getRequest = (url, headers = _authorizationHeaders()) => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + url, {
        headers: Object.assign({}, headers)
      })
      .then(res => {
        if (res['data']['result']) {
          resolve(res['data']['result'])
        } else resolve(res['data'])
      })
      .catch((err, res) => {
        console.log(err, res)
        reject(err)
        handleError(err, res)
      })
  })
}

export const getListRequest = (url, headers = _authorizationHeaders()) => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL + url, {
        headers: Object.assign({}, headers)
      })
      .then(res => {
        console.log('list', res)
        if (res['data']['error']) {
          reject(res['data']['error'])
        } else {
          resolve(res['data']['result'])
        }
      })
      .catch((err, res) => {
        console.log('list', res, err)
        reject(err['response']['data']['error'])
        handleError(err, res)
      })
  })
}

export const postRequest = (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  return new Promise((resolve, reject) => {
    axios({
      url: API_URL + url,
      method: 'POST',
      headers: Object.assign({}, headers),
      data: data
    })
      .then(res => {
        console.log('res', res)
        if (res['data']) {
          resolve(res['data']['result'])
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        reject(err['response']['data']['message'])
        handleError(err)
      })
  })
}

export const putRequest = (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  return new Promise((resolve, reject) => {
    axios({
      url: API_URL + url,
      method: 'PUT',
      headers: Object.assign({}, headers),
      data: data
    })
      .then(res => {
        if (res['data']['results']) {
          resolve(res['data']['results'])
        } else resolve(res['data'])
      })
      .catch(err => {
        reject(
          err && err['respnse']
            ? err['response']['data']['message']
            : 'Error occured'
        )
        handleError(err)
      })
  })
}

export const patchRequest = (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  return new Promise((resolve, reject) => {
    axios({
      url: API_URL + url,
      method: 'PATCH',
      headers: Object.assign({}, headers),
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res['data']['results']) {
          resolve(res['data']['results'])
        }
      })
      .catch(err => {
        reject(err['response']['data']['message'])
        handleError(err)
      })
  })
}

export const deleteRequest = (url, headers = _authorizationHeaders()) => {
  return new Promise((resolve, reject) => {
    axios({
      url: API_URL + url,
      method: 'DELETE',
      headers: Object.assign({}, headers)
    })
      .then(res => {
        if (res['data']['results']) {
          reject(res['data']['results'])
        } else if (res['data']['results']) {
          resolve(res['data']['results'])
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        reject(err['response']['data']['message'])
        handleError(err)
      })
  })
}

export const Api = {
  deleteRequest,
  getListRequest,
  getRequest,
  postRequest,
  putRequest,
  patchRequest
}
