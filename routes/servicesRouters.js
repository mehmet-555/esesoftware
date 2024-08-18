const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const validator = require('validator');



// Routers
const servicesRouter = express.Router();

const webSRouter = express.Router();
const gcpRouter = express.Router();
const automationSRouter = express.Router();
const corporateRouter = express.Router();
const scrapingSRouter = express.Router();

// Utils and MW's
const rootDir = require("../utils/rootDir");
// console.log(rootDir)

const { check, param, query, validationResult } = require("express-validator");

function isMobile(userAgent) {
    return /mobile/i.test(userAgent);
}


servicesRouter.all("*", (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    // console.log(userAgent)
    if (isMobile(userAgent)) {
        // console.log(String("Bu istek bir mobil cihazdan geldi.").toLocaleUpperCase());
    } else {
        // console.log(String("Bu istek bir masaüstü cihazdan geldi.").toLocaleUpperCase());
    }
    next();
});

servicesRouter.use("/web-services", webSRouter);
servicesRouter.use("/gcp", gcpRouter);
servicesRouter.use("/corparate", corporateRouter);
servicesRouter.use("/web-scraping", scrapingSRouter);
servicesRouter.use("/automation", automationSRouter);

servicesRouter.use("/", (req, res, next) => {
    res.status(200).render("services/services.ejs");
    // console.log(req.ip)
});


// WEB SERVICES
webSRouter.get("/creating-static-web-site", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
],  async (req, res, next) => {

    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
    
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[0],
                pageTitle: pageObj.pages[0].pageTitle
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

    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[1],
                pageTitle: pageObj.pages[1].pageTitle
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

    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[2],
                pageTitle: pageObj.pages[2].pageTitle
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

    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[3],
                pageTitle: pageObj.pages[3].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});
webSRouter.get("/restructuring", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[4],
                pageTitle: pageObj.pages[4].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

// GCP 
gcpRouter.get("/redistribution-with-ae", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[5],
                pageTitle: pageObj.pages[5].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});
gcpRouter.get("/redistribution-with-cr", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[6],
                pageTitle: pageObj.pages[6].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});
gcpRouter.get("/virtual-server-with-gce", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[10],
                pageTitle: pageObj.pages[10].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

// AUTOMATION
automationSRouter.get("/automation-solutions", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[11],
                pageTitle: pageObj.pages[11].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

// CORPARATE
corporateRouter.get("/corparate-intranet-solutions", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[7],
                pageTitle: pageObj.pages[7].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});
corporateRouter.get("/qr-menu-application", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[8],
                pageTitle: pageObj.pages[8].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});

// WEB SCRAPING
scrapingSRouter.get("/web-scraping-and-web-automation", [
    // query('url').isURL().withMessage('Must be a valid URL')   // Daha sonra aktif edeceğim!!!
], async (req, res, next) => { 
    
    // console.log(req.originalUrl);
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        try {
            const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
            const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
            const pageObj = JSON.parse(pagesJson);
            // console.log(pageObj);
            // console.log(req.ip);
            
            res.status(200).render('services/webServices/servicesGeneralLayout', {
                thePathArr: thePathArr,
                page: pageObj.pages[9],
                pageTitle: pageObj.pages[9].pageTitle
            });
        } catch (error) {
            next(error);
        };
    }else {
        return res.status(400).json({ errors: errors.array() });
    };
});



app.get('/', (req, res) => {
    res.render('some-page', { 
        pageTitle: 'Esesoftware | Some Page',
        pageCanonicalUrl: `https://esesoftware.com/some-page`
    });
});



module.exports = servicesRouter;





