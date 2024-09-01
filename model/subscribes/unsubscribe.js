const fs = require("fs").promises;
const path = require("path");
const rootDir = require("../../utils/rootDir");

const subsPath = path.join(rootDir, "model", "subscribes", "subscribes.json");

async function userIsUnsubscribed(email, token) {
    try {
        console.log(subsPath)
        const subscribesJson = await fs.readFile(subsPath);
        const subscribesObj = JSON.parse(subscribesJson);
        
        // E-posta adresine göre kullanıcıyı bul
        const user = subscribesObj.subscribes.find(subscribe => 
            subscribe.email === email
        );
        console.log("cosnole 5")
        console.log(user.businessName)
        if (user) {
            if(user.isSubscribed) {
                console.log("cosnole 1")
                return true
                
            }else {
                console.log("cosnole 2")
                return false
            }
        } else {
            // Kullanıcı bulunamazsa, false döndürülür
            console.log("cosnole 3")
            return false;
        }
    } catch (error) {
        console.log("cosnole 4")
        console.error("Error reading or parsing subscribes.json:", error);
        // Hata durumunda false döndürüyoruz
        return false;
    }
}

module.exports = userIsUnsubscribed;