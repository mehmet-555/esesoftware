const express = require("express");
const router = express.Router();
const { isTheUserCurrentlySubscribed, isThereEmail, cancelSubscribe } = require('../model/subscribes/unsubscribe');

router.route("/")
    .get(async (req, res, next) => { // .get metodunu async olarak tanımlıyoruz
        const email = req.query.email;
        const token = req.query.token;

        try {
            const isSubscribeNow = await isTheUserCurrentlySubscribed(email); // await kullanıyoruz
            if (isSubscribeNow) {
                res.status(200).render("staticContents/unsubscribe", {
                    isSubscribeNow: true
                });
            } else {
                res.status(200).render("staticContents/unsubscribe", {
                    isSubscribeNow: false
                });
            }
        } catch (error) {
            console.error("An error occurred: ", error);
            res.status(500).send("Internal Server Error");
        }
    })
    .post(async (req, res, next) => {
        try {
            const didTheUserCancelSub = await cancelSubscribe(req.body.email);
    
            if (didTheUserCancelSub === true) {
                res.status(201).json({ message: "E-posta aboneliği iptal edildi." });
            } else {
                res.status(404).json({ message: "E-posta aboneliği iptali sırasında bir hata oluştu" });
            }
        } catch (error) {
            console.error("Hata oluştu:(cancelSubscribe  fonksiyonu)", error);
            res.status(500).json({ message: "Sunucu hatası.(cancelSubscribe  fonksiyonu)" });
        }
    });

router.post("/controlEmail", async (req, res, next)=> {
    try {
        const value = await isThereEmail(req.body.email);
        if(value === true) {
            res.status(201).send("Kullanıcı var");
        } else {
            res.status(404).send("Email bulunamadı kullanıcı yok");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error(isThereEmail fonksiyonu çalışması sırasında bir hata meydana geldi)");
    }
})

module.exports = router; 