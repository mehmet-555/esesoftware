const fs = require("fs").promises;
const path = require("path");

const validator = require('validator');

// Utils and MW's
const rootDir = require("../utils/rootDir");

exports.handlePage = async function handlePage(req, res, next, index) {
    try {
        const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
        const pagesJson = await fs.readFile(path.join(rootDir, "model/pages/sPages.json"), 'utf8');
        const pageObj = JSON.parse(pagesJson);
        
        res.status(200).render('services/webServices/servicesGeneralLayout', {
            thePathArr: thePathArr,
            page: pageObj.pages[index],
            pageTitle: pageObj.pages[index].pageTitle
        });
    } catch (error) {
        next(error);
    };
}
