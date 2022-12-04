const logger = require("../scripts/logger/KullaniciLogger");
const { remove, update, list, MenuAl } = require("../services/MusteriServis");

const {
  siparisEkle,
} = require("../services/SiparislerServis");

const MenuCagir = (req, res) => {
  MenuAl()
    .then((response) => {
      console.log(response);
      res.status(200).send({ resData: response });
      logger.info("Veriler gönderildi, Gönderilen Veri: ", response); //log
    })
    .catch((err) => {
      logger.error("Veri hatası: ", err); //hata log
      res.status(500).send({ resData: "Veri uygun değil." });
    });
};

const SiparisEkle = (req, res) => {
  siparisEkle(req.body)
    .then((response) => { // işlem bloğu.
      res.status(200).send({ resData: response }); //başarılı işlem sonucu dönecek değer.
      logger.info("Sipariş alındı, alınan sipariş: ", req.body);
    })
    .catch((err) => {
      console.log(err);      // hatayı yakalayacak yer.
      logger.error("Sipariş ekleme hatası - ", err);
      res.status(500).send({ resData: "Sipariş hatalı!" }); // başarsıız işlem sonucu dönecek değer.
    });
};

// const SiparisDuzenle = (req, res) => {
//   update(req.body)
//   .then((response) => {
//     logger.info("Sipariş düzenlendi. Yeni sipariş: ", req.body);
//     res.status(200).send({ resData: response });
//   })
//   .catch((err) => {
//     logger.error("Sipariş eklenemedi, hata: ", err);
//     res.status(500).send({ resData: "Düzenleme yapılamadı." });
//   });
// };

// const SiparisleriAl = (req, res) => {
//   list()
//   .then((response) => {
//     res.status(200).send({ resData: response });
//     logger.info("Sipariş bilgileri alındı.");
//   })
//   .catch((err) => {
//     logger.error("Sipariş bilgileri alınamadı, hata: ", err);
//     res
//     .status(500)
//     .send({ resData: "Bilgiler alınamadı." });
//   });
// };

//   const SiparisSil = (req, res) => {
//     remove(req.body)
//     .then((response) => {
//       logger.info("Sipariş silindi. Silinen id: ", req.body);
//       res.status(200).send({ resData: response });
//     })
//     .catch((err) => {
//       logger.error("Sipariş silme hatası, hata: ", err);
//       res
//         .status(500)
//         .send({ resData: "Silme işlemi Başarısız." });
//     });
// };

module.exports = {
  MenuCagir,
  SiparisEkle
  // SiparisDuzenle,
  // SiparisSil,
  // SiparisleriAl,
};
