const express = require("express");
const cors = require("cors");
const data = require("./food.json");

const app = express();
app.use(cors());

app.get("/food", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
