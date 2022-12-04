const winston = require("winston");
// Log işlemleri...
const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "musteri-service" },
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "v1/source/logs/errors.log", //Hatalarla oluşturulacak log kısmı.
    }),
    new winston.transports.File({
      level: "info",
      filename: "v1/source/logs/info.log", //Verilerin olacağı log kısmı.
    }),
    new winston.transports.File({ filename: "v1/source/logs/allLogs.log" }), //Her türlü logun bulunacağı kısım.
  ],
});

module.exports = logger;
