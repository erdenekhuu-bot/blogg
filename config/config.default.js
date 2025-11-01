/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1761377939832_6604';

  // add your middleware config here
  config.middleware = [];

  config.cors = {
      Origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.mongoose={
    client: {
       url: 'mongodb://127.0.0.1:27017/erdenee',
       options:{},
       plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
