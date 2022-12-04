//buraya yazılacak metodlar ile kontrol sağlanacak

const httpStatus = require("http-status");
const logger = require("../scripts/logger/KullaniciLogger");

const ObjectValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    logger.error("ObjectValidation hatası - ", error);
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ hataMesaji: "Verilerde eksik ya da uygunsuzluk var." });

    return;
  }

  Object.assign(req, value);

  return next();
};

const IdValidate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate({ id: req.body.id });

  if (error) {
    logger.error("IdValidate hatası - ", error);

    res.send({
      hataMesaji: "id bulunamıyor.",
      status: httpStatus.BAD_REQUEST,
    });

    return;
  }

  Object.assign(req, value);

  return next();
};

module.exports = {
  ObjectValidation,
  IdValidate,
};
