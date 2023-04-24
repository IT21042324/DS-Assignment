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
  addReview,
} = require("../controller/storeController");

router.use(requireAuth);
//create store
router.post("/add", createStore);
//display
router.get("/", getAllStore);

//to get the item count in a store
router.get("/getStoreItemCount/:id", getStoreItemCount);

//update store info
router.put("/update/", updateStore);

//add a review for a store item
router.patch("/addReview", addReview);

//delete a store
router.delete("/delete/:id", deleteStore);

//get one store
router.get("/get/:id", getOneStore);

router.patch("/updateItem", addStoreItem); //to add item to store item Array
router.patch("/modifyItem", modifyStoreItem); //to modify the item in Store item array
router.patch("/deleteStoreItem", deleteStoreItem); //to delete the item from store item array

module.exports = router;
