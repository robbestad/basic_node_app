const curry = require("lodash.curry");

const requiredParam = curry((paramName, envName, params, env) => {
  const value = params[paramName] || env[envName];
  if (!value) {
    throw new Error(
      `Missing configuration for "${paramName}": should be given as program param "--${paramName}" or env "${envName}"`
    );
  }
  return value;
});

export default requiredParam;
