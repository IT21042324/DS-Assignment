const router = require("express").Router();

const {
  createStore,
  getAllStore,
  updateStore,
  getOneStore,
  deleteStore,
  updateStoreItem,
  deleteStoreItem,
} = require("../controller/storeController");
//create store
router.post("/add", createStore);
//display
router.get("/", getAllStore);
//update
router.put("/update/", updateStore);

router.delete("/delete/", deleteStore);

router.get("/get/", getOneStore);

//Routes to update and delete store items
router.patch("/updateItem", updateStoreItem);
router.patch("/deleteStoreItem", deleteStoreItem);

module.exports = router;
