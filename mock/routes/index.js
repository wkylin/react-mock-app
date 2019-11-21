// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(500).send({ response: 'I am alive' });
});
// router.get("/api/", (req, res) => {
//   res.send({ response: "api success" }).status(200);
// });

const loginApi = require('./login/login');

router.post('/api/login', loginApi.login);
router.get('/api/logout', loginApi.logout);
router.get('/api/notfound', loginApi.notFound);
router.get('/api/serve500', loginApi.serve500);
router.get('/api/serve504', loginApi.serve504);

module.exports = router;
