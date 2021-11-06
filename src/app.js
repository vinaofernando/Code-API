const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/exchange-rate", (req, res) => {
  res.json({
    Dollar: 7.5,
    Euro: 6.3,
  });
});
app.get("/health", (req, res) => {
  res.send("I am good");
});

module.exports = app;
