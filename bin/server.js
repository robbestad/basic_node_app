import Koa from "koa";
import cors from "koa-cors";
import convert from "koa-convert";
import Router from "koa-router";

const router = new Router();
const app = new Koa();
import config from "./lib/config-singleton.js";
import initServices from "./lib/services/index.js";

import routes from "./lib/routes/index.js";

const koa = new Koa();
const services = initServices(config);
const { port } = config.instance.config;

koa.use(convert(cors()));

router.use(routes(services).routes());

app.use(router.routes());

const server = app.listen(port).on("error", err => {
  // eslint-disable-next-line no-console
  console.error(err);
});

export default server;
