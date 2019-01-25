import bodyParser from "koa-body";

function app(config, services, router, koa) {
  const log = services.logger.child({
    component: "basic-node-app"
  });

  koa
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.port);

  log.info(`Acando Basic Node App listening on: ${config.port} 🚀  `);
}

export default app;
