// Node Core Modules
const path = require("path");

// Npm, Utils and ExternalMiddlewares
const express = require("express");
const rootDir = require("./utils/rootDir");

// Routers
const homeRouter = require("./routes/homeRouters");
const projectRouter = require("./routes/projectRouters");
const aboutRouter = require("./routes/aboutRouters");
const servicesRouter = require("./routes/servicesRouters.js");

// App
const app = express();

// Internal Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));
app.use(express.static(path.join(rootDir, "/public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/services", servicesRouter);
app.use("/project", projectRouter);
app.use("/about", aboutRouter);
app.use("/", homeRouter);
module.exports = app;

