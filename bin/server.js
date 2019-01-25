import Koa from "koa";
import Router from "koa-router";
import cors from "koa-cors";

import app from "./app.js";
import initServices from "./lib/services/index.js";
import routes from "./lib/routes/index.js";
import readConfig from "./lib/config/config.js";

const koa = new Koa();
koa.use(cors());

const router = new Router();

const config = readConfig(process.argv, process.env);
const services = initServices(config);

router
  .use(routes(config, services).routes());

app(config, services, router, koa);
