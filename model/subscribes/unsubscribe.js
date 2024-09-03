const fs = require('fs').promises;
const path = require('path');
const admin = require('firebase-admin');

let db;

async function initializeFirebase() {
  try {
    const theKeyJsonPath = path.join(__dirname, "key.json");
    const serviceAccountData = await fs.readFile(theKeyJsonPath, 'utf8');
    const serviceAccount = JSON.parse(serviceAccountData);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    db = admin.firestore();
    console.log("Firebase başarıyla başlatıldı.");
  } catch (error) {
    console.error("Firebase başlatma hatası:", error);
  }
}

async function startApp() {
  await initializeFirebase();

  // Firebase başlatıldıktan sonra bu işlevleri çağırın
  try {
    const result = await isTheUserCurrentlySubscribed('example@example.com');
    console.log(result);
  } catch (error) {
    console.error("Veritabanı sorgulama hatası:", error);
  }
}

startApp();

// Bu fonksiyon kullanıcının şuanda abone olup olmadığını kontrol ediyor, sonuca göre true | false dönderiyor.
//DA: Verilen e-mail ile veritabanında bir sorgulama yapılıyor; eğer bir sonuç yoksa false döndürülüyor. Sonrasında let ile isSubscribed değişkeni false olarak tanımlanıyor. veritabanı sorgusunda ilgili döküman bulunursa ve 
//isSubscribeNow değeri true ise isSubscribed değeri true olarak güncellenip bu değişken gönderiliyor. isSubscribeNow değeri false ise isSubscribed değişkeni false olarak kalıyor ve sonuçta false dönderiliyor.
async function isTheUserCurrentlySubscribed(email) {
    try {
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();

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
    try {
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();

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
    try {
        // Firestore'da 'emailSubscribes' koleksiyonunda email ile eşleşen belgeyi sorguluyoruz
        const userSnapshot = await db.collection('emailSubscribes')
                                    .where('businessEmail', '==', email)
                                    .get();

        if (userSnapshot.empty) {
            console.log(`Kullanıcı ${email} bulunamadı. 3`);
            return false;
        }

        let success = false;
        userSnapshot.forEach(async (doc) => {
            const userRef = db.collection('emailSubscribes').doc(doc.id);
            await userRef.update({ isSubscribeNow: false });
            console.log("Güncelleme sonrası isSubscribeNow değeri: 4", false);
            success = true;
        });

        return success;

    } catch (error) {
        console.error("FB CS veri güncelleme hatası: 5", error);
        return false;
    }
}

module.exports = {
    isTheUserCurrentlySubscribed,
    isThereEmail,
    cancelSubscribe
};