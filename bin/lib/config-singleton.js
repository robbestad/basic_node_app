const APPKEY = Symbol("digas");

import readConfig from "./config/config.js";

const config = readConfig(process.argv, process.env);

global[APPKEY] = {
  config
};

var configSingleton = {};

Object.defineProperty(configSingleton, "instance", {
  get: function() {
    return global[APPKEY];
  }
});

Object.freeze(configSingleton);
export default configSingleton;
