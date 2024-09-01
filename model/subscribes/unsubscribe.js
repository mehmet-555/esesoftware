const fs = require("fs").promises;
const path = require("path");

async function userIsUnsubscribed(email, token) {
    try {
        const subscribesJson = await fs.readFile(path.join(__dirname, "subscribes.json"));
        const subscribesObj = JSON.parse(subscribesJson);
        // E-posta adresine göre kullanıcıyı bul
        const user = subscribesObj.subscribes.find(subscribe => 
            subscribe.businessEmail === email
        );
        
        console.log(user, user.businessEmail, user.businessName)
        if (user) {
            if(user.isSubscribed === "true") {
                return true
                
            }else {
                return false
            }
        } else {
            // Kullanıcı bulunamazsa, false döndürülür
            return false;
        }
    } catch (error) {
        console.error("Error reading or parsing subscribes.json:", error);
        // Hata durumunda false döndürüyoruz
        return false;
    }
}
async function isThereEmail(email) {
    try {
        const subscribesJson = await fs.readFile(path.join(__dirname, "subscribes.json"));
        const subscribesObj = JSON.parse(subscribesJson);

        // `some` metodu, koşulu sağlayan bir öğe bulursa `true` döner ve döngüyü sonlandırır
        const emailExists = subscribesObj.subscribes.some(subscribe => 
            subscribe.businessEmail === email
        );

        return emailExists;
    } catch (error) {
        console.error("Error reading or parsing subscribes.json:", error);
        return false;
    }
}


module.exports = {
    userIsUnsubscribed,
    isThereEmail
};