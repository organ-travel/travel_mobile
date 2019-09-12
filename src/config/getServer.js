import axios from 'axios'
import config from '@/config'

const Server = data => {
  let url = ''
  if (data.mock) {
    url = data.url || `${config.mockHost}${data.action}`
  } else {
    url = data.url || `${config.host}${data.action}`
  }
  return new Promise((resolve, reject) => {
    axios.get(url, data.params || {})
      .then(async (response) => {
        if (response.data.errcode == 0) {
          resolve(response.data.data)
        } else {
          await window.$alert(response.data.errdesc || 'error')
        }
      })
      .catch((err) => {
        console.log('Server:res:', err)
        // err && await window.$dialog('服务器错误')
        reject(err)
      }).finally(() => {})
  })
}

export default Server
