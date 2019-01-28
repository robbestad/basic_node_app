import Koa from "koa";
import cors from "koa-cors";
import convert from "koa-convert";
import Router from "koa-router";

const router = new Router();
const app = new Koa();
import config from "./lib/config/index.js";
import initServices from "./lib/services/index.js";

import routes from "./lib/routes/index.js";
import bodyParser from "koa-body";

const services = initServices(config);
const { port } = config.instance.config;

const log = services.logger.child({
  component: "acando-server"
});

app.use(convert(cors()));

router.use(routes(services).routes());

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(port, err => {
  if (err) log.debug(err);
  log.info(`Acando Basic Node App listening on: ${port} 🚀  `);
});

export default server;
