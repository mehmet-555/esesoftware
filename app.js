const path = require("path");

const express = require("express");
const rootDir = require("./utils/rootDir");

const app = express();

app.set("view engine", "ejs")
app.use(express.static(path.join(rootDir, "/public")));

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/public/pages/index.html"))
})
module.exports = app;

