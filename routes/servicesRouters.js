const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const validator = require('validator');



// Routers
const servicesRouter = express.Router();

const webSRouter = express.Router();
const automationSRouter = express.Router();
const gcpSRouter = express.Router();
const corporateSRouter = express.Router();
const scrapingSRouter = express.Router();

// Utils and MW's
const rootDir = require("../utils/rootDir");
console.log(rootDir)

const { check, param, query, validationResult } = require("express-validator");





servicesRouter.use("/web-services", webSRouter);


servicesRouter.use("/", (req, res, next) => {
    res.status(200).render("services/services.ejs");
    console.log(req.ip)
});





webSRouter.get("/creating-static-web-site", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
],  async (req, res, next) => {

    console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            console.log(pageObj);
            console.log(req.ip);
    
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[0]
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
    
});
webSRouter.get("/creating-dynamic-web-app", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => {

    console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            console.log(pageObj);
            console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[1]
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

webSRouter.get("/web-hosting-services", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 

    console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            console.log(pageObj);
            console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[2]
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});
webSRouter.get("/ui-ux-development", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 

    console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            console.log(pageObj);
            console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[3]
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

module.exports = servicesRouter;