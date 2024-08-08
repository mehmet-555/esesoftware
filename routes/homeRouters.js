const path = require("path");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/rootDir");
const { route } = require("./homeRouters");

const secretKey = process.env.ESESOFTWARE_SECRET_KEY_FOR_CONTACT_BOX;

router.use(cookieParser());

router.get("/", checkSignedCookie, (req, res, next) => {
    console.log("ÇLAIŞTI 4")
    res.status(200).render("staticContents/index", {
        sendMessage: true
    })
    console.log("ÇLAIŞTI 5")
})
router.post("/contact", (req, res, next) => {
    console.log(req.body)
    const messageSend = {
        userSendMessage: true
    }
    // JWT Oluşturma
    const sendMessageJWT = jwt.sign(messageSend, secretKey, { expiresIn: '6h' });

    res.cookie("ES_smCookie", sendMessageJWT, { httpOnly: true, maxAge: 6 * 60 * 60 * 1000, secure: true });
    res.status(200).send("Message received and cookie send")
});





// İmzalı çerezi kontrol eden middleware
function checkSignedCookie(req, res, next) {
    const ES_smCookie = req.cookies.ES_smCookie;
    console.log(ES_smCookie)
    if (!ES_smCookie) {
        console.log("ÇLAIŞTI 3")
        return res.status(200).render("staticContents/index", {
            sendMessage: false
        })
    }

    try {
        const verified = jwt.verify(ES_smCookie, secretKey);
        next();
        console.log("ÇLAIŞTI 1")
    } catch (err) {
        console.log("ÇLAIŞTI 2")
        return res.status(200).render("staticContents/index", {
            sendMessage: false
        });
        
    }
}

module.exports = router;