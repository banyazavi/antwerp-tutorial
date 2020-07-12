import axios from 'axios'
import https from 'https'

export const getPokeInstance = (timeout = 5000) => {
  const baseUrl = 'https://pokeapi.co/api/v2/'
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    timeout: timeout,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  })

  instance.interceptors.response.use(
    (response) => { return response },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    }
  )

  return instance
}
