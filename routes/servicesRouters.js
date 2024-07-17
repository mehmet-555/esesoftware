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
    console.log(req.ip)
});





webSRouter.get("/creating-static-web-site", (req, res, next) => {
    const thePathArr = req.originalUrl.split("/").slice(1);
    console.log(thePathArr)
    console.log(req.ip);
    res.status(200).render("services/webServices/creatingStaticWebSite", {
        thePathArr: thePathArr,
        pageTitle: "Statik Web Sitesi Kurulumu",
        pageContent: {
            a1: {
                header: "Statik Web Sitesi Geliştirme",
                subHeaders: [
                    {id: "navLink1", href: "#entryforObserver1", sHeader: "Statik Web Sitesi Nedir?"},
                    {id: "navLink2", href: "#entryforObserver2", sHeader: "Statik Web Sitesi Avantajları"},
                    {id: "navLink3", href: "#entryforObserver3", sHeader: "Neden ve Ne Zaman Statik Web Sitesi Tercih Edilmeli?"},
                    {id: "navLink5", href: "#entryforObserver5", sHeader: "Statik Web Sitesi Geliştirme Süreci"},
                    {id: "navLink7", href: "#entryforObserver7", sHeader: "Bu Alanda Kullandığımız Teknolojiler ve Araçlar"},
                    {id: "navLink9", href: "#entryforObserver9", sHeader: "Statik Web Siteleri ve Dinamik Web Uygulamaları Arasındaki Farklar"},
                ]
            },
            a2: {
                header: "Statik Web Sitesi Oluşturun",
                subHeaders: [
                    {id: "navLink10", href: "#entryforObserver10", sHeader: "Bu Alanda Hizmetlerimiz"},
                    {id: "navLink11", href: "#entryforObserver11", sHeader: "Neden Bizi Tercih Etmelisiniz?"},
                    {id: "navLink12", href: "#entryforObserver12", sHeader: "Statik Web Sitesi Fiyatlarına Etki Eden Faktörler"},
                    {id: "navLink13", href: "#entryforObserver13", sHeader: "Daha Fazla Bilgi Alın"},
                    {id: "navLink14", href: "#entryforObserver14", sHeader: "Hemen Bir Teklif Al / Proje Başlat"},
                ]
            }
        }
    });
})
webSRouter.get("/creating-dynamic-web-app", (req, res, next) => {
    const thePathArr = req.originalUrl.split("/").slice(1);
    console.log(thePathArr)
    console.log(req.ip);
    res.status(200).render("services/webServices/creatingDynamicWebApp", {
        thePathArr: thePathArr,
        pageTitle: "Dinamik Web Sitesi Kurulumu",
        pageContent: {
            a1: {
                header: "Dinamik Web Uygulaması Geliştirme",
                subHeaders: [
                    {id: "navLink1", href: "#entryforObserver1", sHeader: "Dinamik Web Uygulaması Nedir?"},
                    {id: "navLink2", href: "#entryforObserver2", sHeader: "Dinamik Web Uygulaması Artıları"},
                    {id: "navLink3", href: "#entryforObserver3", sHeader: "Neden ve Ne Zaman Dinamik Web Uygulamasına İhtiyaç Duyulur?"},
                    {id: "navLink5", href: "#entryforObserver5", sHeader: "Dinamik Web Uygulaması Geliştirme Süreci"},
                    {id: "navLink7", href: "#entryforObserver7", sHeader: "Bu Alanda Kullandığımız Teknolojiler ve Araçlar"},
                    {id: "navLink9", href: "#entryforObserver9", sHeader: "Statik Web Siteleri ve Dinamik Web Uygulamaları Arasındaki Farklar"},
                ]
            },
            a2: {
                header: "Dinamik Web Uygulaması Oluşturun",
                subHeaders: [
                    {id: "navLink10", href: "#entryforObserver10", sHeader: "Bu Alanda Hizmetlerimiz"},
                    {id: "navLink11", href: "#entryforObserver11", sHeader: "Neden Bizi Tercih Etmelisiniz?"},
                    {id: "navLink12", href: "#entryforObserver12", sHeader: "Dinamik Web Uygulaması Fiyatlarına Etki Eden Faktörler"},
                    {id: "navLink13", href: "#entryforObserver13", sHeader: "Daha Fazla Bilgi Alın"},
                    {id: "navLink14", href: "#entryforObserver14", sHeader: "Hemen Bir Teklif Al / Proje Başlat"},
                ]
            }

        }
    });
})
// webSRouter.get("/", (req, res, next) => {
//     // res.status(200).render("services/webServices/webServices");
// });



 


module.exports = servicesRouter;