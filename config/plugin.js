/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
