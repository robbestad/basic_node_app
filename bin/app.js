import bodyParser from "koa-body";
import config from "./lib/singleton.js";

function app(services, router, koa) {
  const log = services.logger.child({
    component: "basic-node-app"
  });

  const { port, env } = config.instance.config;

  koa
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  if (env === "test") {
    return koa;
  } else {
    koa.listen(port, err => {
      if (err) log.debug(err);
      log.info(`Acando Basic Node App listening on: ${port} 🚀  `);
    });
  }
}

export default app;
