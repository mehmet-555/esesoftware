
document.addEventListener("DOMContentLoaded", ()=> {
    activeValidator();
})



function activeValidator() {
    const unsubscribeBtn = document.getElementById("unsubscribeBtn");
    const emailInput = document.getElementById("emailInput");

    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');


    emailInput.addEventListener("input", (e)=> {
        const email = e.target.value;
        if (validateEmail(email)) {
            if(email === userEmail) {
                const sonuc = controlDB(email);
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