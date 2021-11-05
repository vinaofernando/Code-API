const express = require("express");
const app = express();

app.get("/exchange-rate", (req, res) => {
  res.json({
    dollar: 5.5,
    euro: 6.4,
  });
});
app.get("/health", (req, res) => {
  res.send("I am good");
});

module.exports = app;
