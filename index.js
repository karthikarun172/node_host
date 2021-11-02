/** @format */

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("welcome homies");
});

app.listen(4000, () => {
  console.log("ho mama");
});
