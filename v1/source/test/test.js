const request = require("supertest");
const app = require("../app");
const { BilgilerRoutes } = require("../api-routes");
const { closeConnection } = require("../loaders/db");
const config = require("../config");
const loaders = require("../loaders");

describe("Uygulama Testi", () => {
  beforeAll(() => {
    config();
    loaders();
  });

  afterAll(() => {
    closeConnection();
  });

  app.use(BilgilerRoutes);

  test("/api/testBilgiler GET test", async () => {
    const response = await request(app).get("/api/testBilgiler");
    expect(response.statusCode).toBe(200);
  });
});
