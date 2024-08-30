
const path = require("path");
const express = require("express");
const nodemailer = require('nodemailer');


const projectRouter = express.Router();
const webProjectRouter = express.Router();

const rootDir = require("../utils/rootDir");


webProjectRouter.route("/static-web")
    .get((req, res, next) => {
        // console.log(req)
        res.sendFile(path.join(__dirname, "../public/pages/project/web-staticForm.html"));
    })
    .post((req, res, next) => {
        const formData = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: 'esesoftwaretr@gmail.com', 
                pass: process.env.EMAIL_APPLICATION_KEY
            }
        })

        // Gönderilecek e-posta ayarları
        let mailOptions = {
            from: 'esesoftwaretr@gmail.com', 
            to: 'info@esesoftware.com', 
            subject: `Proje Başlat Formu`, 
            text: `Statik veya Dinamik Web Uygulaması Proje Başlat Formu: ${JSON.stringify(formData, null, 2)}` 
        };

        // E-posta gönderme
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Bir hata oluştu. Lütfen tekrar deneyin.');
            }
            console.log('Email sent: ' + info.response);
            return res.status(201).send("Server response: Request received successfully");
        });
    });

webProjectRouter.route("/dynamic-web")        // Bence burası hiç çalışmıyir...
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "../public/pages/project/web-dynamicForm.html"));
    })
    .post((req, res, next) => {
        res.status(201).send("Server response: Request received successfully");
    });

webProjectRouter.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/project/web-project.html"));
})
projectRouter.use("/web-project", webProjectRouter);

projectRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/pages/project/project.html"));
});

module.exports = projectRouter;