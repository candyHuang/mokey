const Router = require('koa-router');
const controller = require('../controller');
const config = require('../config');
const router = new Router();

// Api
router
  .get('/', (ctx, next) => {
    ctx.response.body = 'Hello';
  })
  .get('/test', controller.test.test);

module.exports = router;
