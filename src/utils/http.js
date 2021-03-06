import axios from "axios"

import { Loading, Message,MessageBox } from 'element-ui'

axios.defaults.timeout =  6000;

let loading

function startLoading () {
    loading = Loading.service({
      lock: true, // 是否锁定
      text: '拼命加载中...', // 加载中需要显示的文字
      background: 'rgba(0,0,0,.7)' // 背景颜色
    })
  }
  
  // 结束加载动画
  function endLoading () {
    loading.close()
  }

  axios.interceptors.request.use(config => {
    console.log(config)
    startLoading()// 请求时的加载动画
    return config // 加载动画的时候把config return 回去
  }, error => {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(response => {

      endLoading()// 结束加载动画
     return response // 结束时把response return回去
    
  }, error => {
    // 错误提醒
    endLoading()// 如果错误也结束动画
    Message.error('请求超时,请重新加载')
    return Promise.reject(error)
  })
export function get(url,params){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export function post(url,params){
    return new Promise((resolve,reject) => {
        axios.post(url,params)
        .then(res =>{
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}