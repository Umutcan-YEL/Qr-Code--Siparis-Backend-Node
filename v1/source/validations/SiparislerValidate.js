const Joi = require("joi");

const SiparisValidate = Joi.object({
  masaNo: Joi.number().required(),
  Urun: Joi.array(),
  Ekstralar: Joi.array().max(50),
  Not: Joi.string().max(150),
  ToplamFiyat: Joi.number().required().min(1),
  SiparisAktifMi: Joi.boolean().required()
});


//Sipariş için sağlanması gereken koşullar.

module.exports = {
  SiparisValidate,
};
