const path = require("path");
const express = require("express");
const projectRouter = express.Router();

const rootDir = require("../utils/rootDir");

projectRouter.get("/", (req, res, next)=> {
    res.render("staticContents/about");
});

module.exports = projectRouter;