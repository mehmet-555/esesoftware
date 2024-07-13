const path = require("path");
const express = require("express");

const servicesRouter = express.Router();

const webSRouter = express.Router();
const automationSRouter = express.Router();
const gcpSRouter = express.Router();
const corporateSRouter = express.Router();
const scrapingSRouter = express.Router();







servicesRouter.use("/web-services", webSRouter);
servicesRouter.use("/", (req, res, next) => {
    res.status(200).render("services/services.ejs");
});





webSRouter.get("/creating-static-web-site", (req, res, next) => {
    res.status(200).render("services/webServices/creatingStaticWebSite2");
})

// webSRouter.get("/", (req, res, next) => {
//     // res.status(200).render("services/webServices/webServices");
// });



 


module.exports = servicesRouter;