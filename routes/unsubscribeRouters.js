const express = require("express");

const router = express.Router();
const userIsUnsubscribed = require("../model/subscribes/unsubscribe");


router.route("/")
    .get((req, res, next) => {
        const email = req.query.email;
        const token = req.query.token;

        if(userIsUnsubscribed(email, token)) {
            res.status(200).render("staticContents/unsubscribe", {
                isUnsubscribedYet: true
            })
        }else {
            res.status(200).render("staticContents/unsubscribe", {
                isUnsubscribedYet: false
            })
        }

    })
    .post((req, res, next) => {

    })



module.exports = router;