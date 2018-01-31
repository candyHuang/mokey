const Koa = require('koa');
const koaBody = require('koa-body'); // post body 解析
const config = require('./config');
const router = require('./router');
const app = new Koa();
const port = config.APP.PORT || 3000;

app.use(
  koaBody({
    jsoinLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb',
  })
);
app.use(router.routes());
app.listen(port);

console.log(`server started, listening ${port} .`);
