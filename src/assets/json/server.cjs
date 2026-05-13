const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('--- JSON Server Auth 啟動成功 ---');
  console.log('註冊端點: http://localhost:3000/register');
  console.log('登入端點: http://localhost:3000/login');
  console.log('資源列表: http://localhost:3000/users');
});