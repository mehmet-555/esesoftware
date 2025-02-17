const fs = require('fs').promises;
const path = require('path');
const admin = require('firebase-admin');

let db; // Global olarak tanımlıyoruz

async function startDB () {
    try {
        const keyJson = await fs.readFile(path.join(__dirname, "key.json"), {encoding: "utf-8"});
        const serviceAccount = JSON.parse(keyJson);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://zinc-advice-422101-a2.firebaseio.com' // Proje URL'ni güncellediğinden emin ol
        });
        console.log("Firebase admin başlatıldı"); // Bunu kontrol edin
        db = admin.firestore();
        console.log("Firestore başlatıldı");
    } catch (error) {
        console.error("Veritabanı başlatma hatası: ", error);
    }
}

// Fonksiyonları çağırmadan önce veritabanı başlatıldığından emin oluyoruz
async function ensureDBInitialized() {
    if (!db) {
        await startDB(); // Eğer db henüz başlatılmadıysa, başlat
    }
}

// Bu fonksiyon kullanıcının şuanda abone olup olmadığını kontrol ediyor, sonuca göre true | false dönderiyor.
//DA: Verilen e-mail ile veritabanında bir sorgulama yapılıyor; eğer bir sonuç yoksa false döndürülüyor. Sonrasında let ile isSubscribed değişkeni false olarak tanımlanıyor. veritabanı sorgusunda ilgili döküman bulunursa ve 
//isSubscribeNow değeri true ise isSubscribed değeri true olarak güncellenip bu değişken gönderiliyor. isSubscribeNow değeri false ise isSubscribed değişkeni false olarak kalıyor ve sonuçta false dönderiliyor.
async function isTheUserCurrentlySubscribed(email) {
    await ensureDBInitialized(); // Veritabanının başlatıldığından emin ol
    try {
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        console.log(`Veritabanında ${email} sorgulanıyor...`);  // E-mail veritabanında sorgulanıyor.
        const snapshot2 = await db.collection('emailSubscribes').get();
        snapshot2.forEach(doc => {
            console.log(doc.id, '=>', doc.data());  // Tüm verileri loglayarak e-posta var mı kontrol edelim
        });
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();
        console.log("Firestore yanıtı alındı: ", userSnapshot);
        if(userSnapshot.empty) {
            console.log("Bu email'e sahip bir abone bulunamadı. -1");
            return false;
        };
        let isSubscribed = false;
        userSnapshot.forEach(doc => {
            const userData = doc.data();
            // isSubscribeNow değerini kontrol ediyoruz
            if (userData.isSubscribeNow === true) {
                isSubscribed = true;
            }
        })
        return isSubscribed;
    } catch (error) {
        console.error("FB CS veri sorgulama hatası: 1", error);
        return false;
    }
};

//Bu fonkiyon veritabanında böyle bir email in olup olmadığını kontrol ediyor, sonuca göre true | false dönderiyor.
async function isThereEmail(email) {
    await ensureDBInitialized(); // Veritabanının başlatıldığından emin ol
    try {
        console.log(`Veritabanında ${email} olup olmadığı kontrol ediliyor...`);  // E-mail var mı kontrol ediliyor.
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        const snapshot2 = await db.collection('emailSubscribes').get();
        snapshot2.forEach(doc => {
            console.log(doc.id, '=>', doc.data());  // Tüm verileri loglayarak e-posta var mı kontrol edelim
        });
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();
        console.log("Firestore yanıtı alındı: ", userSnapshot);
        // Snapshot boş değilse, email vardır
        return !userSnapshot.empty;
    } catch (error) {
        console.error("FB CS veri sorgulama hatası: 2", error);
        return false;
    }
}

//Bu fonksiyon ile kullanıcı "E-Posta Listesinden Çık" butonuna tıklayarak yeni e-mail alımını engelliyor(Veritabanında isSubscribeNow "false" olarak güncelleniyor.)
// Verilen e-mail ile veritabanında ilgili koleksiyonda bu e-mail e sahip bir döküman var mı bakılıyor; eğer yoksa fonksiyon false dönderiyor varsa bu dökümanın isSubscribeNow değeri false olarak güncelleniyor ve fonksiyon success(true) dönüyor.  
async function cancelSubscribe(email) {
    await ensureDBInitialized(); // Veritabanının başlatıldığından emin ol
    try {
        console.log(`Abonelik iptali için ${email} sorgulanıyor...`);  // Abonelik iptali için e-mail sorgulanıyor.
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        const snapshot2 = await db.collection('emailSubscribes').get();
        snapshot2.forEach(doc => {
            console.log(doc.id, '=>', doc.data());  // Tüm verileri loglayarak e-posta var mı kontrol edelim
        });
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();
        console.log("Firestore yanıtı alındı: ", userSnapshot);
        if (userSnapshot.empty) {
            console.log(`Kullanıcı ${email} bulunamadı.`);
            return false;
        }

        // Burada userSnapshot'daki tüm belgeleri güncellemek için Promise.all kullanıyoruz
        const updatePromises = userSnapshot.docs.map(async (doc) => {
            const userRef = db.collection('emailSubscribes').doc(doc.id);
            await userRef.update({ isSubscribeNow: false });
            console.log("Güncelleme sonrası isSubscribeNow değeri: ", false);
            return true;
        });

        const results = await Promise.all(updatePromises);
        return results.every(result => result);  // Eğer tüm güncellemeler başarılı olduysa true döndür

    } catch (error) {
        console.error("FB CS veri güncelleme hatası: ", error);
        return false;
    }
}

module.exports = {
    isTheUserCurrentlySubscribed,
    isThereEmail,
    cancelSubscribe
};