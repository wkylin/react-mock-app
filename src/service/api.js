import service from './index';

export const login = (payload) => {
  return service.post('/api/login/',{ data: payload });
};
export const logout = (payload) => {
  return service.get('/api/logout/', { params: payload });
};
export const serve504 = (payload) => {
  return service.get('/api/serve504', { params: payload });
};
export const serve500 = (payload) => {
  return service.get('/api/serve500', { params: payload });
};
