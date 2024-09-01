
document.addEventListener("DOMContentLoaded", ()=> {
    activeValidator();
})



function activeValidator() {
    const unsubscribeBtn = document.getElementById("unsubscribeBtn");
    const emailInput = document.getElementById("emailInput");

    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');

    unsubscribeBtn.addEventListener("click", (e)=> {
        sendCancelRequest(emailInput.value)
            .then(response => {
                console.log(response.message)
                window.location.reload(true);
            })
    })

    emailInput.addEventListener("input", async (e)=> {
        emailInput.classList.remove("validEmailInput");
        unsubscribeBtn.disabled = true
        const email = e.target.value;
        if (validateEmail(email)) {
            if(email === userEmail) {
                try {
                    const sonuc = await controlDB(email);
                    emailInput.classList.add("validEmailInput")
                    unsubscribeBtn.disabled = false
                    
                } catch (error) {
                    console.error(error);
                }
                
            }else {
                console.warn("girilen email ve url deki email eşit değil.")
            }


        } else {
            console.log("Geçersiz e-posta");
        }
    })
}


async function controlDB(email) {
    try {
        const response = await fetch('/unsubscribe/controlEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        });

        if (!response.ok) {
            if (response.status === 404) {
                console.log('Email not found');
                return false;
            }
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Beklenen yanıt veritabanından dönen yanıt
    } catch (error) {
        console.error('Fetch error:', error);
        return false;
    }
};

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/;
    return regex.test(email);
}

async function sendCancelRequest(email) {
    try {
        const response = await fetch("/unsubscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email})
        });

        if (!response.ok) {
            if (response.status === 404) {
                console.log("Unsubscribe failed.");
                alert("E-posta aboneliği iptali başarısız oldu.");  // Kullanıcıya geri bildirim ver
                return false;
            }
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data.message);
        return true;
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Sunucuyla iletişimde bir sorun oluştu. Lütfen tekrar deneyin.");  // Hata durumunda kullanıcıyı bilgilendir
        return false;
    }
}