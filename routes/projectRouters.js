
const path = require("path");
const express = require("express");

const projectRouter = express.Router();
const webProjectRouter = express.Router();

const rootDir = require("../utils/rootDir");


webProjectRouter.route("/static-web")
    .get((req, res, next) => {
        // console.log(req)
        res.sendFile(path.join(__dirname, "../public/pages/project/web-staticForm.html"));
    })
    .post((req, res, next) => {
        // console.log(typeof req.body);
        console.log(req.body);
        res.status(201).send("Server response: Request received successfully");
    });

webProjectRouter.route("/dynamic-web")
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "../public/pages/project/web-dynamicForm.html"));
    })
    .post((req, res, next) => {
        // console.log(typeof req.body);
        console.log(req.body);
        res.status(201).send("Server response: Request received successfully");
    });

webProjectRouter.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/project/web-project.html"));
})
projectRouter.use("/web-project", webProjectRouter);

projectRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/pages/project/project.html"));
});

module.exports = projectRouter;