// const path = require("path");
// const express = require("express");
// const projectRouter = express.Router();
// const webProjectRouter = express.Router();

// const rootDir = require("../utils/rootDir");




// webProjectRouter.get("/static-web", (req, res, next)=> {
//     res.sendFile(path.join(__dirname, "../public/pages/project/web-staticForm.html"));
// })

// projectRouter.get("/web-project", webProjectRouter);

// projectRouter.get("/", (req, res, next)=> {
//     res.sendFile(path.join(__dirname, "../public/pages/project/project.html"));
// });

// module.exports = projectRouter;


const path = require("path");
const express = require("express");
const projectRouter = express.Router();
const webProjectRouter = express.Router();

const rootDir = require("../utils/rootDir");

// webProjectRouter içinde "/static-web" rotasını tanımlıyoruz
webProjectRouter.get("/static-web", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/pages/project/web-staticForm.html"));
});
webProjectRouter.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/project/web-project.html"));
})
// projectRouter içine webProjectRouter'ı bir alt rota olarak ekliyoruz
projectRouter.use("/web-project", webProjectRouter);

// projectRouter içinde ana rota tanımlıyoruz
projectRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/pages/project/project.html"));
});

module.exports = projectRouter;