const express = require("express");

const path = require("path");
const rootDir = require("./utils/rootDir");

const app = express();

app.use(express.static(path.join(rootDir, "/public")));
app.set("view engine", "ejs")
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/public/pages/index.html"))
})

module.exports = app;