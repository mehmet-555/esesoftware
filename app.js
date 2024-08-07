// Node Core Modules
const path = require("path");

// Npm, Utils and ExternalMiddlewares
const express = require("express");
const rootDir = require("./utils/rootDir");

// Routers
const homeRouter = require("./routes/homeRouters");
const projectRouter = require("./routes/projectRouters");
const aboutRouter = require("./routes/aboutRouters");
const blogRouter = require("./routes/blogRouters");
const servicesRouter = require("./routes/servicesRouters.js");
const privacyRouter = require("./routes/privacyRouters.js");
// Router dosyalarını içe aktarma ykp
const robotsRouter = require('./routes/robotsRouter');
const sitemapRouter = require('./routes/sitemapRouter');

// // App
// const app = express();
// // URL Yönlendirmeleri
// app.use((req, res, next) => {
//     if (!req.hostname.startsWith('www.')) {
//       res.redirect(301, 'https://www.' + req.hostname + req.originalUrl);
//     } else {
//       next();
//     }
//   });
  
//   app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https') {
//       res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
//     } else {
//       next();
//     }
//   });
  
//   app.use((req, res, next) => {
//     const canonicalUrl = 'https://www.esesoftware.com';
//     if (req.hostname !== 'www.esesoftware.com' || req.protocol !== 'https') {
//       res.redirect(301, canonicalUrl + req.originalUrl);
//     } else {
//       next();
//     }
//   });

// Internal Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));
app.use(express.static(path.join(rootDir, "/public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/services", servicesRouter);
app.use("/project", projectRouter);
app.use("/about", aboutRouter);
app.use("/blog", blogRouter);
app.use("/privacy-policy", privacyRouter);
app.use("/", homeRouter);

// Router'ları kullanma ykp
app.use("/robots.txt", robotsRouter);
app.use("/sitemap.xml", sitemapRouter);
module.exports = app;

