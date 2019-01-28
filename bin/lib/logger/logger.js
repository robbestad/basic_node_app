const bunyan = require("bunyan");
const PrettyStream = require("bunyan-prettystream");

function prettyFormat() {
  const prettyStdOut = new PrettyStream({ mode: "short" });
  prettyStdOut.pipe(process.stdout);
  return prettyStdOut;
}

function configureStreams() {
  const streams = [];
  streams.push({
    level: "debug",
    type: "raw",
    stream: prettyFormat()
  });
  return streams;
}

export default {
  create(config) {
    return bunyan.createLogger({
      name: "acando",
      serializers: bunyan.stdSerializers,
      streams: configureStreams(config)
    });
  }
};
