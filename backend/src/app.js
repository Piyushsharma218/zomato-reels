const express = require("express");
const cookieparser=require("cookie-parser")
const app = express();
const authroutes=require("./routes/auth.routes.js")

app.use(express.json());
app.use(cookieparser())

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth",authroutes)

module.exports = app;
