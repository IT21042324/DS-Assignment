const router = require("express").Router();
const {
  postItem,
  addReview,
  getAllItems,
  modifyReview,
  deleteReview,
  updateItem,
  getOneItem,
  deleteItem,
  deleteAllItemsFromStore,
} = require("../controller/itemController");

// Route for adding a new item
router.post("/addItem", postItem);

// Route for adding a new review to an item
router.patch("/addReview", addReview);

// Route for modifying an existing review for an item
router.patch("/modifyReview", modifyReview);

// Route for deleting a review for an item
router.patch("/deleteReview", deleteReview);

// Route for deleting an item
router.delete("/deleteItem/:id", deleteItem);

// Route for getting all items
router.get("/", getAllItems);

// Route for getting a specific item by ID
router.get("/findOne", getOneItem);

// Route for updating an item
router.patch("/updateItem", updateItem);

// Route for deleting all items for a specific store by store ID
router.delete("/deleteStoreItems/:id", deleteAllItemsFromStore);

module.exports = router;
