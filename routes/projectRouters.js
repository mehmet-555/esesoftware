const path = require("path");
const express = require("express");
const projectRouter = express.Router();

const rootDir = require("../utils/rootDir");

projectRouter.get("/web-project", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/project/web-project.html"));
})

projectRouter.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/project/project.html"));
});

module.exports = projectRouter;