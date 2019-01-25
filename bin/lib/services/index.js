import Logger from "../logger/logger.js";

export default config => {
  const logger = Logger.create(config);

  return {
    logger
  };
};
