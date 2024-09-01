const express = require("express");
const router = express.Router();
const userIsUnsubscribed = require("../model/subscribes/unsubscribe");

router.route("/")
    .get(async (req, res, next) => { // .get metodunu async olarak tanımlıyoruz
        const email = req.query.email;
        const token = req.query.token;
        
        try {
            const isUnsubscribed = await userIsUnsubscribed(email, token); // await kullanıyoruz
            if (isUnsubscribed) {
                res.status(200).render("staticContents/unsubscribe", {
                    isUnsubscribedYet: true
                });
            } else {
                res.status(200).render("staticContents/unsubscribe", {
                    isUnsubscribedYet: false
                });
            }
        } catch (error) {
            console.error("An error occurred: ", error);
            res.status(500).send("Internal Server Error");
        }
    })
    .post((req, res, next) => {
        // POST işlemi burada yapılabilir
    });

module.exports = router;