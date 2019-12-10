import axios from 'axios'
import store from '../store'
import { message } from 'ant-design-vue'
let base = process.env.VUE_APP_SERVER_BASE_URL
const service = axios.create({
    baseURL: base,
    timeout: 60000
})

service.interceptors.request.use(
    config => {
        store.commit('setLoading')
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
        store.commit('cancelLoading')
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        store.commit('cancelLoading')
        const res = response.data
        if (res.error_no === 200) {
            return Promise.resolve(res.data)
        } else {
            message.error(res.error_msg)
            return Promise.reject(res.error_msg)
        }
    },
    error => {
        message.error(error)
        store.commit('cancelLoading')
        return Promise.reject(error)
    }
)
export default service
