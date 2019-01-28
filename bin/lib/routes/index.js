import Router from "koa-router";

const router = new Router();

function wrapper({ logger }) {
  const log = logger.child({
    component: "routes"
  });

  return router
    .get("/", async ctx => {
      log.info("fetch root");
      ctx.set("Content-Type", "text/plain");
      ctx.body = {
        status: "Acando Basic App"
      };
    })
    .get("/health", async ctx => {
      ctx.set("Content-Type", "application/json");
      ctx.body = {
        status: "OK"
      };
    });
}

export default wrapper;
