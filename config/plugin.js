/** @type Egg.EggPlugin */
module.exports = {z
  // had enabled by egg
  static: {
    enable: true,
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};

exports.cors = {
    enable: true,
    package: 'egg-cors',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
}