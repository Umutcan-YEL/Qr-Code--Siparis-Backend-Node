const mongoose = require("mongoose");

const SiparisSchema = new mongoose.Schema(
  {
    masaNo: { type: Number },
    Miktar: { type: Number },
    Urun: { type: Array },
    Ekstralar: { type: Array },
    Not: { type: String },
    ToplamFiyat: { type: Number },
    SiparisAktifMi: { type: Boolean }
  },
  //TOPLAM ÜRÜN SAYISINI VE TOPLAM FİYATI VERECEK BİR BİÇİMDE DÜZENLENECEK!
  {
    collection: "Siparisler",
    versionKey: false,
    timestamps: true,
  }
);

SiparisSchema.post("save", (doc) => {
});


// const siparis =

module.exports = mongoose.model("SiparisSchema", SiparisSchema);
