const path = require("path");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/rootDir");

const secretKey = process.env.ESESOFTWARE_SECRET_KEY_FOR_CONTACT_BOX;

router.use(cookieParser());

router.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
});
router.post("/contact", (req, res, next) => {
    console.log(req.body)
    const messageSend = {
        userSendMessage: true
    }
    // JWT Oluşturma
    const sendMessageJWT = jwt.sign(messageSend, secretKey, { expiresIn: '1d' });

    res.cookie("ES_smCookie", sendMessageJWT, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).send("Message received and cookie send")
});


module.exports = router;