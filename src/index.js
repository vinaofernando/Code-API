const app = require("./app");

const port = process.env.PORT || 3002;
console.log(port);
app.listen(port, () => {
  console.log("Listening");
});
