import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
})

// Attach JWT token + sensible Content-Type per request body type
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('swiftpay_token')
    if (token) config.headers.Authorization = `Bearer ${token}`    //agar token hai to usse Authorization header
    //  me Bearer token dal dena hai. isse backend ko pata chalega ki user authenticated hai.
    
    // agar request koi file  ha to usma content type set na krne ka reason ye hai ki browser khud content type
    //  set kr dega multipart/form-data ke sath sahi boundary ke sath. agar hum content type khud set karenge 
    // to boundary missing ho jayega aur server body ko parse nahi kar payega.

    if (typeof FormData !== 'undefined' && config.data instanceof FormData) {
      delete config.headers['Content-Type']
      delete config.headers['content-type']
    } else if (!config.headers['Content-Type'] && !config.headers['content-type']) {
      // Default to JSON for everything else (matches old behavior).
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Auto-unwrap { message, data } envelope + handle 401 globally
api.interceptors.response.use(
  (response) => {
    const body = response.data
    // Backend returns { message: "...", data: <payload> }
    // Unwrap so callers get res.data = the actual payload
    if (body && typeof body === 'object' && 'data' in body && 'message' in body) {
      response.data = body.data
    }
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('swiftpay_token')
      localStorage.removeItem('swiftpay_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
