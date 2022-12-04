const express = require("express");
const router = express.Router();
const {
  SiparisDuzenle,
  SiparisSil,
  MenuCagir,
  SiparisEkle
} = require("../controllers/MusteriController");
const Schemas = require("../validations/SiparislerValidate");
// const { IdValidate } = require("../middleware/validations");

router.route(process.env.GET_LISTELE).get(MenuCagir);

// router
//   .route(process.env.POST_EKLE)
//   .post(ObjectValidation(Schemas.objectValidate), SiparisEkle);

// router.route(process.env.PUT_DUZENLE).put(
//   IdValidate(Schemas.idValidate),
//   (req, res, next) => {
//     console.log("Düzenle ikinci middleware metodu!! - req \n", req.body);
//     next();
//   },
//   SiparisDuzenle
// );

// router.route(process.env.DELETE_SIL).delete(SiparisSil);

//TEST KISMI
router.get(process.env.GET_TEST, (req, res) => {
  res.status(200).send();
});

// Menü alma dışında tüm end pointler kapatıldı, gereksinim olursa sipariş ekleme kısmı kullanıcı için uygun hale getirilip tekrar eklenecek.

router
  .route(process.env.POST_SIPARIS_EKLE)
  .post(SiparisEkle);

module.exports = router;
