const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Wel.js"));

module.exports = router;
