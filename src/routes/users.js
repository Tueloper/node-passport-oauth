const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/User");

router.get("/login", user_controller.login);
router.get("/register", user_controller.register);

router.post("/register", user_controller.createUser);

router.post("/login", user_controller.passwordAuth);

module.exports = router;
