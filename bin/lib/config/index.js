const APPKEY = Symbol("digas");

import validatedConfig from "./validated-config.js";

const config = validatedConfig(process.argv, process.env);

global[APPKEY] = {
  config
};

let outConfig = {};

Object.defineProperty(outConfig, "instance", {
  get: function() {
    return global[APPKEY];
  }
});

Object.freeze(outConfig);
export default outConfig;
