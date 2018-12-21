import axios from 'axios'

const timeout = 2000

// todo: base urls from env ?

export const authApi = axios.create({
  baseURL: `http://192.168.1.65:8001`,
  timeout,
})

export const coreApi = axios.create({
  baseURL: `http://192.168.1.65:8002`,
  timeout,
})
