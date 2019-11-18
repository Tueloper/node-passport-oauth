const User = require("../models/User");
const keys = require("../config/keys");

module.exports = {
  async login(req, res) {
    await res.render("login");
  },

  async register(req, res) {
    await res.render("register");
  },

  async createUser(req, res) {
    const { name, email, password, password2 } = req.body;
    try {
      let errors = [];

      if (!name || !email || !password || !password2)
        errors.push({ msg: "Pleae fill in all fields" });
      if (password != password2)
        errors.push({ msg: "Passwords do not match " });
      if (password.length < 6)
        errors.push({ msg: "Passwords Must not be less than 6" });

      if (errors.length > 0) {
        // return console.log(errors);
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        //validation Passed

        //check if email exist
        const emailCheck = User.findOne({ email: req.body.email });

        if (emailCheck) {
          errors.push({ msg: "Email already exsit" });
          res.render("register", {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User(req.body);
          await newUser.save();

          res.status(200).send(console.log(newUser));
          return console.log(newUser);
        }
      }
    } catch (e) {
      res.send(console.log(e.message));
      // res.redirect("/register");
    }
  },

  async passwordAuth(req, res) {
    //destructure the values
    const { email, password } = req.body;

    try {
      //check for errors
      let errors = [];

      if (!email || !password)
        errors.push({ msg: "Pleae fill ina all fields" });
      if (password.length < 6)
        errors.push({ msg: "Passwords Must not be less than 6" });

      if (errors.length > 0) {
        res.render("login", {
          errors,
          email,
          password
        });
      } else {
        try {
          const usera = {
            name: name,
            email: email,
            password: password,
            password2: password2
          };
          console.log(usera);
          res.send("pass");
        } catch (error) {
          res.status(400).send(error.message);
        }
      }
    } catch (e) {
      res.send(console.log(e.message));
      // res.redirect("/login");
    }
  }
};
