import service from './index';

export const login = (payload) => {
  return service.post('/api/login/',{ data: payload });
};
export const logout = (payload) => {
  return service.get('/api/logout/', { params: payload });
};
