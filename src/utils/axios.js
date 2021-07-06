import axios from 'axios'
import router from '@/router/index'
import config from '~/config'
import { ElMessage } from 'element-plus'
import { localGet } from './index'

//根据环境设置baseUrl
axios.defaults.baseUrl = config[import.meta.env.MODE].baseUrl

//是否携带cookie
axios.defaults.withCredentials= true

//设置haeder 请求头信息
axios.defaults.headers['X-Requested-Wieh']='XMLHttpRequest'
axios.defaults.headers['token']=localGet('token') || ''

//默认 post 请求,application/json 数据格式
axios.defaults.headers.post['Content-Type']='application/json'


//请求拦截器,请根据api自行修改
axios.interceptors.response.use(res=>{
  //默认正确的res.data的返回值为对象
  if(typeof res.data!== 'object'){
    ElMessage.error('服务端异常!')
    return Promise.reject(res)
  }
  if(res.data.resultCode !== 200){
    if(res.data.message) ElMessage.error(res.data.message)
    if(res.data.resultCode==419){
      ElMessage.error('验证异常!')//默认419为验证异常，可以跳转去登录页面
    }
    return Promise.reject(res.data)
  }
  return res.data.data//最终返回值为res.data.data
})

export default axios