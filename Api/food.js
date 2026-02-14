const express = require("express");
const cors = require("cors");
const data = require("../food.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/food", (req, res) => {
  res.status(200).json(data);
});


module.exports = app;
