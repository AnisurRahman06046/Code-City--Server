const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/coursecategories", (req, res) => {
  res.send(courseCategories);
});

app.listen(port, () => {
  console.log("serving is running", port);
});
