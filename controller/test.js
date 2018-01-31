const request = require('request');

class TestController {
  static async test(ctx) {
    const res = await request.get(
      'http://api.dataoke.com/index.php?r=Port/index&type=total&appkey=cfe4541f38&v=2&page=1'
    );
    console.log(res);
    ctx.response.body = res;
  }
}

module.exports = TestController;
