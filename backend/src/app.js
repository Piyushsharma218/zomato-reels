const express = require("express");
const cookieparser=require("cookie-parser")
const app = express();

app.use(express.json());
app.use(cookieparser())

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
