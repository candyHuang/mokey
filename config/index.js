exports.APP = {
  PORT: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000,
  },
  mongodb: 'mongodb://bittyhouse.iask.in:27017/sign',
};
