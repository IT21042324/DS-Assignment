const router = require("express").Router();

const {
  createMerchant,
  getAllMerchant,
  updateMerchant,
  getOneMerchant,
  deleteMerchant,
} = require("../controller/merchantController");
//create
router.post("/add", createMerchant);
//display
router.get("/", getAllMerchant);
//update
router.put("/update/:merchantid", updateMerchant);

router.delete("/delete/:merchantid", deleteMerchant);

router.get("/get/:merchantid", getOneMerchant);

module.exports = router;
