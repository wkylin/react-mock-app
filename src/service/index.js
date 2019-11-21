import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { getToken, removeToken, setToken } from '../utils/auth';

// 创建axios实例
const $http = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000, // 请求超时时间,
  transformRequest: [
    function (data) {
      return qs.stringify(data);
    },
  ],
});

$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
$http.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

const queue = {}; // 使用队列解决多个请求加载问题
// request.interceptors
$http.interceptors.request.use(
  (config) => {
    queue[config.baseURL + config.url] = true;
    message.loading('loading');
    if (getToken()) {
      config.headers.loginToken = getToken();
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log('request: error==>>', error);

    return Promise.reject(error);
  },
);

// 请求响应拦截 用于处理数据返回后的操作
$http.interceptors.response.use(
  (response) => new Promise((resolve, reject) => {
    if (response && response.headers && response.headers.authorization) {
      setToken(response.headers.authorization);
    }
    // 请求成功后关闭加载框
    // console.log(response.config);
    if (response && response.config && response.config.url) {
      delete queue[response.config.url];
    }
    if (!Object.keys(queue).length) {
      // Vue.$loading.hide();
    }
    // console.log(queue);
    if (
      response
        && response.config
        && response.config.responseType === 'blob'
    ) {
      resolve(response.data);
      return;
    }
    if (response.data.status === true) {
      resolve(response.data.data);
      message.success(response.data.message);
    } else {
      reject(response.data);
      message.error(response.data.message || '服务器维护中');
    }
  }),
  (error) => {
    if (error.response && error.response.config && error.response.config.url) {
      delete queue[error.response.config.url];
    }
    if (!Object.keys(queue).length) {
      // Vue.$loading.hide();
    }
    // 断网处理或者请求超时
    if (!error.response) {
      for (const key in queue) {
        if (queue.hasOwnProperty(key)) {
          delete queue[key];
        }
      }
      // message.loading('loading');
      // 请求超时
      if (error.message.includes('timeout')) {
        message.error('请求超时,请检查互联网连接后重试');
      } else {
        message.error('请检查网络是否已连接');
      }
      return Promise.reject(error);
    }

    if (error.response && error.response.data && error.response.data.errors) {
      const keys = Object.keys(error.response.data.errors);
      message.error(error.response.data.errors[keys[0]]);
    }
    const { status } = error.response;
    switch (status) {
      case 500:
        message.error('服务器错误');
        break;
      case 404:
        message.error('未找到远程服务器');
        break;
      case 401:
        // router.replace({
        //   path: '/'
        // });
        message.warning('当前登录已失效，请重新登陆');
        removeToken();
        break;
      case 400:
        message.error('数据异常');
        break;
      default:
        message.error(error.response.data.message);
    }
    return Promise.reject(error);
  },
);

export default $http;

/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

// 上传
export function upload(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data.formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

// 下载
export function download(url, { params }) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        responseType: 'blob',
      }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

// 下载 backDocument
export function backDocument(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
        responseType: 'document',
      }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}
