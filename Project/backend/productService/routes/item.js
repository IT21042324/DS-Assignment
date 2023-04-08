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
} = require("../controller/itemController");

router.post("/addItem", postItem);
router.patch("/addReview", addReview);
router.patch("/modifyReview", modifyReview);
router.patch("/deleteReview", deleteReview);
router.delete("/deleteItem/:id", deleteItem);
router.get("/", getAllItems);
router.get("/findOne", getOneItem);
router.patch("/updateItem", updateItem);

module.exports = router;
