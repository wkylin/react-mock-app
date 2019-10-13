import axios from 'axios';
import { getToken } from '../utils/auth';

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://localhost:4001',
  timeout: 15000 // 请求超时时间
});

// request.interceptors
service.interceptors.request.use(config => {
  config.headers['loginToken'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
  return config;
}, error => {
  // Do something with request error
  console.log('request: error==>>', error);// for debug
  return Promise.reject(error);
});

// response.interceptors
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log('response: error==>>',error); // for debug
    return Promise.reject(error);
  }
);

export default service;
