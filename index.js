const express = require("express");
const app = express();
const port = process.env.PORt || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/course.json");

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter((n) => n.category_id === id);
  res.send(categoryCourse);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((n) => n._id === id);
  res.send(singleCourse);
});
app.listen(port, () => {
  console.log("server is running", port);
});
