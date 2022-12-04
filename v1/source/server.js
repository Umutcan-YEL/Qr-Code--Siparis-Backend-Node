const app = require("./app");
const { BilgilerRoutes } = require("./api-routes");
const logger = require("./scripts/logger/KullaniciLogger");
const app_port = process.env.APP_PORT || 3002;

app.use(BilgilerRoutes);

app.listen(app_port, () => {
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
  logger.info(`${process.env.APP_PORT} portu dinleme işlemi.`);
});
