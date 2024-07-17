const fs = require("fs").promises;
const path = require("path");
const express = require("express");

const servicesRouter = express.Router();

const webSRouter = express.Router();
const automationSRouter = express.Router();
const gcpSRouter = express.Router();
const corporateSRouter = express.Router();
const scrapingSRouter = express.Router();

const rootDir = require("../utils/rootDir");
console.log(rootDir)





servicesRouter.use("/web-services", webSRouter);
servicesRouter.use("/", (req, res, next) => {
    res.status(200).render("services/services.ejs");
    console.log(req.ip)
});





webSRouter.get("/creating-static-web-site", async (req, res, next) => {
    console.log(req.originalUrl);
    try {
        const thePathArr = req.originalUrl.split("/").slice(1);
        const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
        const pageObj = JSON.parse(pagesJson);
        console.log(pageObj)
        console.log(req.ip)

        res.status(200).render('services/webServices/servicesGeneralLayout', {
            thePathArr: thePathArr,
            page: pageObj.pages[0]
        });
    } catch (error) {
        next(error);
    }
})
webSRouter.get("/creating-dynamic-web-app", async (req, res, next) => {
    console.log(req.originalUrl);
    try {
        const thePathArr = req.originalUrl.split("/").slice(1);
        const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
        const pageObj = JSON.parse(pagesJson);
        console.log(pageObj)
        console.log(req.ip)
        
        res.status(200).render('services/webServices/servicesGeneralLayout', {
            thePathArr: thePathArr,
            page: pageObj.pages[1]
        });
    } catch (error) {
        next(error)
    }
})



 


module.exports = servicesRouter;