/** @type Egg.EggPlugin */
module.exports = {z
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.cors = {
    enable: true,
    package: 'egg-cors',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
}