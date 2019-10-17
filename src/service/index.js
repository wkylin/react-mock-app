import axios from 'axios';
import { getToken } from '../utils/auth';
import qs from 'qs'


// 创建axios实例
const service = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000, // 请求超时时间,
  transformRequest: [function (data) {
    return qs.stringify(data)
  }],
});

// request.interceptors
service.interceptors.request.use(
  (config) => {
    config.headers['loginToken'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改

    return config;
  },
  (error) => {

  // Do something with request error
  console.log('request: error==>>', error);// for debug

  return Promise.reject(error);
  }
);

// response.interceptors
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {

    if(error.response){
      console.log('error.response', error.response);
    } else if(error.request){
      console.log('error.request', error.request);
    } else {
      console.log('response: error', error);
    }

    console.log('response: error',error); // for debug
    return Promise.reject(error);
  }
);

export default service;
