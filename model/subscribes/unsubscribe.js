const fs = require("fs").promises;
const path = require("path");
const rootDir = require("../../utils/rootDir");

async function userIsUnsubscribed(email) {
    try {
        const subscribesJson = await fs.readFile(path.join(rootDir, "model", "subscribes", "subscribes.json"));
        const subscribesObj = JSON.parse(subscribesJson);
        
        // E-posta adresine göre kullanıcıyı bul
        const user = subscribesObj.subscribes.find(subscribe => 
            subscribe.email === email
        );
        
        if (user) {
            if(user.isSubscribed) {
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

module.exports = userIsUnsubscribed;