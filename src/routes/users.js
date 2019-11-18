const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

router.post("/register", (req, res) => {
  //destructure the values
  const { name, email, password, password2 } = req.body;

  //check for errors
  let errors = [];

  if (!name || !email || !password || !password2)
    errors.push({ msg: "Pleae fill ina all fields" });
  if (password != password2) errors.push({ msg: "Passwords do not match " });
  if (password.length < 6) errors.push({ msg: "Password is less than 6" });

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    res.send("pass");
  }
});

router.post("/register", (req, res) => {
  //destructure the values
  const { email, password } = req.body;

  //check for errors
  let errors = [];

  if (!email || !password) errors.push({ msg: "Pleae fill ina all fields" });
  if (password.length < 6) errors.push({ msg: "Password is less than 6" });

  if (errors.length > 0) {
    res.render("login", {
      email,
      password
    });
  } else {
    res.send("pass");
  }
});

module.exports = router;
