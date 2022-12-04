const Monngoose = require("mongoose");
const logger = require("../scripts/logger/KullaniciLogger");
const db = Monngoose.connection;

db.on("error", (err) => {
  console.log("DB bağlantı hatası...");
  logger.error("DB bağlantı hatası...", err);
});

db.once("open", async () => {
  console.log("DB bağlantısı sağlandı...");
  logger.info("DB bağlantısı sağlandı...");
});

const connectDB = async () => {
  await Monngoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

const closeConnection = async () => {
  await Monngoose.connection.close();
};

module.exports = {
  connectDB,
  closeConnection,
};
