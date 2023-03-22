let Merchant = require("../models/Merchant");

const createMerchant = async (req, res) => {
  const merchantid = req.body.merchantid;
  const merchantname = req.body.merchantname;
  const contactno = Number(req.body.contactno);
  const address = req.body.address;
  const storeid = req.body.storeid;

  const newMerchant = new Merchant({
    merchantid,
    merchantname,
    contactno,
    address,
    storeid,
  });
  await newMerchant
    .save()
    .then(() => {
      res.json("Merchant Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllMerchant = async (req, res) => {
  await Merchant.find()
    .then((merchant) => {
      res.json(merchant);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateMerchant = async (req, res) => {
  let mid = req.params.merchantid;
  const { merchantid, merchantname, contactno, address, storeid } = req.body;

  const updateMerchant = {
    merchantid,
    merchantname,
    contactno,
    address,
    storeid,
  };
  const update = await Merchant.findById(mid, updateMerchant)
    .then(() => {
      res.status(200).send({ Status: "Merchant updated", merchant: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deleteMerchant = async (req, res) => {
  let mid = req.params.merchantid;
  await Merchant.findById(mid)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete merchant", error: err.message });
    });
};

const getOneMerchant = async (req, res) => {
  let mid = req.params.merchantid;
  await Merchant.findById(mid)
    .then(() => {
      res.status(200).send({ status: "User fetched" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete merchant", error: err.message });
    });
};

module.exports = {
  createMerchant,
  getAllMerchant,
  updateMerchant,
  deleteMerchant,
  getOneMerchant,
};
