const router = require("express").Router();

const {
  createStore,
  getAllStore,
  updateStore,
  getOneStore,
  deleteStore,
  addStoreItem,
  deleteStoreItem,
  getStoreItemCount,
  modifyStoreItem,
  getStoreDescription,
} = require("../controller/storeController");
//create store
router.post("/add", createStore);
//display
router.get("/", getAllStore);

router.get("/getStoreItemCount/:id", getStoreItemCount);
//update
router.put("/update/", updateStore);

router.delete("/delete/:id", deleteStore);

router.get("/get/:id", getOneStore);

router.patch("/updateItem", addStoreItem); //to add item to store item Array
router.patch("/modifyItem", modifyStoreItem); //to modify the item in Store item array
router.patch("/deleteStoreItem", deleteStoreItem); //to delete the item from store item array

module.exports = router;
