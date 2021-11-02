/** @format */

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("welcome homies");
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("ho mama");
});
