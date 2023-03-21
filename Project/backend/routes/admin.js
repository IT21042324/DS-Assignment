const router = require("express").Router();
const { register } = require("../controller/adminController");

router.post("/login");
router.post("/register", register);

module.exports = router;