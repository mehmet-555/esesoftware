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
const timeFormatter = require("../utils/timeFormatter");

// geçici functions

async function getUsers() {
    const users = await fs.readFile(path.join(rootDir, "model/users/users.json"), "utf-8");
    return JSON.parse(users);
}

async function getBlogs() {
    const blogs = await fs.readFile(path.join(rootDir, "model/blogs/blogs.json"), "utf-8");
    return JSON.parse(blogs);
}



router.use("/mehmet-gungor", mgRouter);

mgRouter.get("/what-is-node-js-runtime", async (req, res, next)=> {
    console.log(req.originalUrl);
    try {
        const thePathArr = req.originalUrl.split("/").slice(1).map(part => validator.escape(part));
        const [usersObj, blogObj] = await Promise.all([getUsers(), getBlogs()]);
        
        const mgAllBlogs = blogObj.blogs.filter(blog => blog.blogAuthor === "Mehmet Güngör");
        const mgFirstTwoBlogs = mgAllBlogs.slice(0, 2);

        if(blogObj.blogs[0].blogComments.blogCommentCounts > 0) {
            const commentUsersIdArr = [];
            console.log("yorum var")
            blogObj.blogs[0].blogComments.comments.forEach(comment => {
                commentUsersIdArr.push(comment.commentUserId);
            });
            console.log(commentUsersIdArr);

            const commentUsersArr = [];

            usersObj.users.forEach(user => [
                commentUsersIdArr.forEach(id => {
                    if(id === user.userId) {
                        commentUsersArr.push(user);
                    }
                })
            ]);

            // Yorum tarihlerni formatlama
            blogObj.blogs[0].blogComments.comments.forEach(comment => {
                comment.cTimeAgo = timeFormatter(comment.commentCTimeDetail)
            })

            // commentId, userPic, time, commentContent, likeCount,
            console.log(commentUsersArr);
            console.log("--------------------------------------------------")
            res.status(200).render('blogs/blogPageGeneralLayout', {
                thePathArr: thePathArr,
                blog: blogObj.blogs[0],
                pageTitle: blogObj.blogs[0].blogTitle,
                blogUser: usersObj.users[0],
                mgFirstTwoBlogs: mgFirstTwoBlogs,
                commentUsersArr: commentUsersArr,
                userLoggedIn: false
            });

        }else {
            console.log("yorum yok")
            console.log("--------------------------------------------------")
            res.status(200).render('blogs/blogPageGeneralLayout', {
                thePathArr: thePathArr,
                blog: blogObj.blogs[0],
                pageTitle: blogObj.blogs[0].blogTitle,
                blogUser: usersObj.users[0],
                mgFirstTwoBlogs: mgFirstTwoBlogs,
                commentUsersArr: null,
                userLoggedIn: false
            });
        }        
    } catch (error) {
        next(error);
    };
});

module.exports = router;