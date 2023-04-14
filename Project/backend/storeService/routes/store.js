const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");

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
} = require("../controller/storeController");

router.use(requireAuth);
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
