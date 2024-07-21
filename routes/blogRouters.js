// nodejs core modules
const path = require("path");
const fs = require("fs").promises;

// npm modules
const express = require("express");
const validator = require('validator');

// routers
const router = express.Router();
const mgRouter = express.Router();

// utils and mw s
const rootDir = require("../utils/rootDir");




router.use("/mehmet-gungor", mgRouter);

mgRouter.get("/what-is-node-js-runtime", async (req, res, next)=> {
    console.log(req.originalUrl);
    try {
        const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));

        const users = await fs.readFile(path.join(rootDir, "model/users/users.json"), "utf-8");
        const usersObj = JSON.parse(users);

        const blogsJson = await fs.readFile(path.join(rootDir, "model/blogs/blogs.json"), 'utf8');
        const blogObj = JSON.parse(blogsJson);
        const mgAllBlogs = blogObj.blogs.filter(blog => blog.blogAuthor === "Mehmet Güngör");
        const mgFirstTwoBlogs = mgAllBlogs.slice(0, 2);
        // console.log(mgFirstTwoBlogs)
        // console.log(blogObj);
        // console.log(req.ip);
        // console.log(thePathArr);

        res.status(200).render('blogs/blogPageGeneralLayout', {
            thePathArr: thePathArr,
            blog: blogObj.blogs[0],
            pageTitle: blogObj.blogs[0].blogTitle,
            blogUser: usersObj.users[0],
            mgFirstTwoBlogs: mgFirstTwoBlogs
        });
    } catch (error) {
        next(error);
    };
});

module.exports = router;