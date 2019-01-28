const request = require("supertest");
import app from "../server.js";

describe("start server", () => {
  afterEach(() => {
    app.close();
  });

  it("fetches the root page", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(JSON.parse(response.text)).toEqual({ status: "Acando Basic App" });
  });
  it("fetches the health page", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(JSON.parse(response.text)).toEqual({ status: "OK" });
  });
});

/*
import fetch from "node-fetch";
import Bluebird from "bluebird";
const Promise = require("bluebird");
fetch.Promise = Bluebird;

 */
