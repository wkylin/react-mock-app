const login = function (req, res) {
  res.send({ response: {userName:'wkylin', token:'xxxxxx'} }).status(200);
};
const logout = function (req, res) {
  res.send({ response: {token:'xxxxx'} }).status(200);
};

const notFound = function(req, res) {
  res.status(404).send({ response: { data:'not found' } });
};
const serve500 = function(req, res) {
  res.status(500).send({ response: { data:'server 500' } });
};
const serve504 = function(req, res) {
  res.status(504).send({ response: { data:'server 504' } });
};

const loginApi = {
  login,
  logout,
  notFound,
  serve500,
  serve504,
};
module.exports = loginApi;
