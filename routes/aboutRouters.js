const path = require("path");
const express = require("express");
const projectRouter = express.Router();

const rootDir = require("../utils/rootDir");

projectRouter.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/about.html"));
});

module.exports = projectRouter;