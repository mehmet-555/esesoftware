const path = require("path");

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const express = require("express");

const router = express.Router();

const rootDir = require("../utils/rootDir");
const { route } = require("./homeRouters");

const secretKey = process.env.ESESOFTWARE_SECRET_KEY_FOR_CONTACT_BOX;

router.use(cookieParser());

router.get("/", checkSignedCookie, (req, res, next) => {
    res.status(200).render("staticContents/index", {
        sendMessage: true
    })
})
router.post("/contact", (req, res, next) => {
    const formData = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "esesoftwaretr@gmail.com",
            pass: process.env.EMAIL_APPLICATION_KEY
        }
    })

    const messageContent = `<ul><li><p><span>Ad-Soyad:</span>${formData.nameSurname}</p></li><li><p><span>E-posta:</span>${formData.email}</p></li><li><p><span>Telefon:</span>${formData.phone}</p></li><li><p><span>Konu:</span>${formData.subject}</p></li><li><p><span>Mesaj:</span>${formData.message}</p></li></ul>`
    
    //Gönderilecek e-posta ayarları
    let mailOptions = {
        from: "esesoftwaretr@gmail.com",
        to: "info@esesoftware.com",
        subject: "Anasayfa İletişim Kutusu",
        html: `İletişime Geçme Mesajı: <br>
        ${messageContent}`
    }

    // E-posta gönderme
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
        console.log('Email sent: ' + info.response);
        // return res.status(201).send("Server response: Request received successfully");

        const messageSend = {
            userSendMessage: true
        }
        // JWT Oluşturma
        const sendMessageJWT = jwt.sign(messageSend, secretKey, { expiresIn: '6h' });
    
        res.cookie("ES_smCookie", sendMessageJWT, { httpOnly: true, maxAge: 6 * 60 * 60 * 1000, secure: true });
        res.status(200).send("Message received and cookie send")
    });

    
});





// İmzalı çerezi kontrol eden middleware
function checkSignedCookie(req, res, next) {
    const ES_smCookie = req.cookies.ES_smCookie;
    
    if (!ES_smCookie) {
        console.log("denemeeeeeeeeeeeee3")
        return res.status(200).render("staticContents/index", {
            sendMessage: false
        })
    }

    try {
        const verified = jwt.verify(ES_smCookie, secretKey);
        console.log("denemeeeeeeeeeeeee2")
        next();
    } catch (err) {
        console.log("denemeeeeeeeeeeeee4")
        return res.status(200).render("staticContents/index", {
            sendMessage: false
        });
        
    }
}

module.exports = router;