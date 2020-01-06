import axios from 'axios';
import {url} from './config.js'
import Toast from 'components/toast';
import store from '../redux/store'
import {
    clearUserInfo
} from "actions/userInfo";

axios.defaults.baseURL = url
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}

axios.interceptors.request.use(
  config => {
	  // let cookieArr = document.cookie.match(new RegExp("(^| )"+ '_xsrf' +"=([^;]*)(;|$)"))
	  // if(cookieArr) {
	  //   config.headers['X-csrftoken'] = decodeURI(cookieArr[2])
	  // }
    let dc_xsrf = localStorage.dc_xsrf
    if(dc_xsrf) {
      config.headers['X-csrftoken'] = dc_xsrf
    }
	  return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
  	return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //没有权限
          clearUserInfo()(store.dispatch)
          window.location.hash = '#/' 
          break
        case 403:
          Toast.error(localStorage.localLang === 'zh' ? '网络异常，请刷新页面。' : 'Network Error, please reload the page.', 30000)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default axios