import $http from './index';

export const login = (payload) => $http.post('/api/login/', payload);
export const logout = (payload) => $http.get('/api/logout/', { params: payload });
export const serve504 = (payload) => $http.get('/api/serve504', { params: payload });
export const serve500 = (payload) => $http.get('/api/serve500', { params: payload });
export const corsLoginCheck = (payload) => $http.get('/account/user/login/check/', { params: payload });
export const corsLogin = (payload) => $http.post('/account/user/signin/', payload);
