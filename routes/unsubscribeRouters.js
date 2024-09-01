const express = require("express");

const router = express.Router();

router.route("/")
    .get((req, res, next) => {
        res.status(200).render("staticContents/unsubscribe")
    })
    .post((req, res, next) => {

    })



module.exports = router;