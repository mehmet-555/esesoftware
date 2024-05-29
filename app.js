const express = require("express");

const path = require("path");
const rootDir = require("./utils/rootDir");

const app = express();

app.use(express.static(path.join(rootDir, "/public")));
app.set("view engine", "ejs")
app.get("/", (req, res)=> {
    res.render("sdf");
})

module.exports = app;