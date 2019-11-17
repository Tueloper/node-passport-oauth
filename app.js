const express = require("express");
const expEjs = require("express-ejs-layouts");
require("dotenv").config();

const welcome = require("./routes/index");

const app = express();

//vuiews
app.use(expEjs);
app.set("view engine", ".ejs");

//Routes
app.use("/", welcome);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}\n Server running on port ${port}`);
});
