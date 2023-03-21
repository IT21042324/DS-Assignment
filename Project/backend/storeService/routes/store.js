const router = require("express").Router();

const {
  createStore,
  getAllStore,
  updateStore,
  getOneStore,
  deleteStore,
} = require("../controller/storeController");
//create
router.post("/add", createStore);
//display
router.get("/", getAllStore);
//update
router.put("/update/:storeid", updateStore);

router.delete("/delete/:storeid", deleteStore);

router.get("/get/:storeid", getOneStore);

module.exports = router;
