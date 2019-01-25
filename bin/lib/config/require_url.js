const curry = require("lodash.curry");
const validator = require("validator");
const requiredParam = require("./require_param.js").default;

const requiredUrl = curry((paramName, envName, params, env) => {
  const url = requiredParam(paramName, envName, params, env);
  if (
    !validator.isURL(url, {
      require_protocol: true,
      require_tld: false
    })
  ) {
    throw new Error(
      `Malformed url in configuration for "${paramName}": ${url}`
    );
  }
  return url;
});
export default requiredUrl;
