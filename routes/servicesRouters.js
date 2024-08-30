const express = require("express");

// Routers
const servicesRouter = express.Router();

const webSRouter = express.Router();
const gcpRouter = express.Router();
const automationSRouter = express.Router();
const corporateRouter = express.Router();
const scrapingSRouter = express.Router();

// Utils and MW's
function isMobile(userAgent) {
    return /mobile/i.test(userAgent);
};

// servicesController
const servicesController = require("../controllers/servicesController.js");


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
});


// WEB SERVICES
webSRouter.get("/creating-static-web-site", (req, res, next) => {
    servicesController.handlePage(req, res, next, 0);
});
webSRouter.get("/creating-dynamic-web-app", (req, res, next) => {
    servicesController.handlePage(req, res, next, 1);
});
webSRouter.get("/web-hosting-services", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 2);
});
webSRouter.get("/ui-ux-development", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 3);
});
webSRouter.get("/restructuring", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 4);
});

// GCP 
gcpRouter.get("/redistribution-with-ae", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 5);
});
gcpRouter.get("/redistribution-with-cr", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 6);
});
gcpRouter.get("/virtual-server-with-gce", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 10);
});

// AUTOMATION
automationSRouter.get("/automation-solutions", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 11);
});

// CORPARATE
corporateRouter.get("/corparate-intranet-solutions", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 7);
});
corporateRouter.get("/qr-menu-application", (req, res, next) => { 
    servicesController.handlePage(req, res, next, 8);
});

// WEB SCRAPING
scrapingSRouter.get("/web-scraping-and-web-automation", (req, res, next)=> {
    servicesController.handlePage(req, res, next, 9);
});



module.exports = servicesRouter;





