const express = require("express");
const app = express();

app.get("/exchange-rate", (req, res) => {
  res.json({
    dollar: 7.5,
    euro: 6.3,
  });
});
app.get("/health", (req, res) => {
  res.send("I am good");
});

module.exports = app;
