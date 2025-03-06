const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Render! Your OAuth app is running.");
});

app.get("/oauth/callback", (req, res) => {
  res.send("OAuth callback reached! Exchange the code here.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});