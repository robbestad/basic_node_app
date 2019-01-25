const minimist = require("minimist");
const requiredParam = require("./require_param.js").default;

const requiredPort = requiredParam("port", "NODE_PORT");

function validatedConfig(params, env) {
  return {
    port: requiredPort(params, env)
  };
}

export default function(argv, env) {
  return validatedConfig(minimist(argv || []), env || {});
}
