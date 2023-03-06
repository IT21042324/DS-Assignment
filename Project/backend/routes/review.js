const router = require("express").Router();

const {
  postReview,
  getAllReview,
  getReviewByItem,
} = require("../controller/reviewController");

// router.post("/login", userLogin);
// router.post("/signup", userSignUp);

router.post("/", postReview);
router.get("/", getAllReview);
router.get("/:itemID", getReviewByItem);

module.exports = router;
