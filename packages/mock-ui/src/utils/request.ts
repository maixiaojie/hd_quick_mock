import axios from 'axios'
let base = process.env.VUE_APP_SERVER_BASE_URL
const service = axios.create({
    baseURL: base,
    timeout: 60000
})

service.interceptors.request.use(
    config => {
        const common = {
            timestamp: +new Date()
        }
        if (config.method === 'get' || config.method === 'delete') {
            config.params = {
                ...common,
                ...config.params
            }
        }
        if (config.method === 'post') {
            config.data = {
                ...common,
                ...config.data
            }
        }
        if (config.method === 'put') {
            config.data = {
                ...common,
                ...config.data
            }
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.error_no === 0) {
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res.error_msg)
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default service
