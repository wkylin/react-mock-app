const localStorageService = (function () {
  function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function setRefreshToken(token) {
    localStorage.setItem('refreshToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  function clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  return {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    clearToken,
  };
}());

export default localStorageService;
