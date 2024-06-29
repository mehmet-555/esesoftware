// Node Core Modules
const path = require("path");

// Npm, Utils and ExternalMiddlewares
const express = require("express");
const rootDir = require("./utils/rootDir");

// Routers
const homeRouter = require("./routes/homeRouters");
const projectRouter = require("./routes/projectRouters");
const aboutRouter = require("./routes/aboutRouters");

// App
const app = express();

// Internal Middlewares
app.set("view engine", "ejs")
app.use(express.static(path.join(rootDir, "/public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Business Logic
// app.use((req, res, next) => {
//     console.log(req.subdomains)
//     console.log(1)
//     if (req.subdomains.includes('project')) {
//         app.use(projectRouter);
//         console.log(2)
//     } else {
//         next();
//     }

//     // PRODUCT İÇİN DÜZENLE
// });
app.use("/project", projectRouter);
app.use("/about", aboutRouter);
app.use("/", homeRouter);
module.exports = app;

