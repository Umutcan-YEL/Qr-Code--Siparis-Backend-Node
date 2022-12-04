const {
  kahvalti,
  icecekler,
  TekBagel,
  Tatlilar,
  Sandvicler,
  HaftaSonuOzel,
  Ekstralar,
} = require("../models/UrunBilgileri");

const MenuAl = async () => {
  const Kahvaltı = await kahvalti.find({});
  const Icecekler = await icecekler.find({});
  const Tek_Bagel = await TekBagel.find({});
  const tatlilar = await Tatlilar.find({});
  const Sandviçler = await Sandvicler.find({});
  const Hafta_Sonu_Ozel = await HaftaSonuOzel.find({});
  const ekstralar = await Ekstralar.find({});

  const menuObj = {
    kahvaltiObj: Kahvaltı,

    icecekObj: Icecekler,

    bagelObj: Tek_Bagel,

    tatliObj: tatlilar,

    sanvicObj: Sandviçler,

    haftaSonuObj: Hafta_Sonu_Ozel,

    ekstraObj: ekstralar,
  };

  return menuObj;
};

const list = () => {
  return Bilgi.find({}); //Bilgileri görüntüleme.
};

module.exports = {
  MenuAl,
  list,
};
