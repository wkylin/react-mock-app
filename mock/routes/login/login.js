const login = function (req, res) {
  res.send({ user: { userName: 'wkylin', token: 'xxxxxx' } }).status(200);
};
const logout = function (req, res) {
  res.send({ loginOut: { token: 'xxxxx' } }).status(200);
};

const notFound = function (req, res) {
  res.status(404).send({ noFound: { data: 'not found' } });
};
const serve500 = function (req, res) {
  res.status(500).send({ res500: { data: 'server 500' } });
};
const serve504 = function (req, res) {
  res.status(504).send({ res504: { data: 'server 504' } });
};

const loginApi = {
  login,
  logout,
  notFound,
  serve500,
  serve504,
};
module.exports = loginApi;
