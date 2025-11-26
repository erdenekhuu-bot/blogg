const path = require("path");
require("dotenv").config();
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1761377939832_6604";

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    client: {
      // url: "mongodb://127.0.0.1:27017/local",
      url: process.env.MONGODB_URI,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };
  config.cluster = {
    listen: {
      path: "",
      port: process.env.PORT || 7001,
      hostname: "0.0.0.0", // Important for cloud deployment
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".nj": "nunjucks",
      ".tpl": "nunjucks",
      ".html": "nunjucks",
    },
    root: [
      path.join(appInfo.baseDir, "app/view"),
      path.join(appInfo.baseDir, "app/another_view"),
    ].join(","),
  };

  config.static = {
    prefix: "/",
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true,
  };
  config.jwt = {
    secret: process.env.SECRETJWT,
  };

  config.userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
  };
};
