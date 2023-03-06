const router = require("express").Router();
const {
  postItem,
  addReview,
  getAllItems,
  modifyReview,
} = require("../controller/itemController");

router.post("/addItem", postItem);
router.patch("/addReview", addReview);
router.patch("/modifyReview", modifyReview);
router.get("/", getAllItems);

module.exports = router;
