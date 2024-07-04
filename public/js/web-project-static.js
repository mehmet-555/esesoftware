document.addEventListener("DOMContentLoaded", (e)=> {


    validateContactAndActiveNBtn();


});

var flowCntr = document.getElementById("slideFormCntrInner");
var contactForm = document.getElementById("slideFormContact");

function validateContactAndActiveNBtn () {
    // stepByStepNavContactLİELEM

    const stepByStepNavContact = document.getElementById("stepByStepNavContact");

    // step elementleri
    const contactStep = document.getElementById("slideFormContact");
    const scopeStep = document.getElementById("slideFormScope");
    const detailsStep = document.getElementById("slideFormDetails");
    const bugdetStep = document.getElementById("slideFormBudget");
    const stepsArrays = [contactStep, scopeStep, detailsStep, bugdetStep];

    // Contact Form Inputs
    const slideFormContact1 = document.getElementById("slideFormContact1");
    const slideFormContact2 = document.getElementById("slideFormContact2");
    const slideFormContact3 = document.getElementById("slideFormContact3");
    const slideFormContact4 = document.getElementById("slideFormContact4");

    function isValidAllInputSoActiveBtn() {
        const deger1 = slideFormContact1.classList.contains("validI");
        const deger2 = slideFormContact2.classList.contains("validI");
        const deger3 = slideFormContact3.classList.contains("validI");
        const deger4 = slideFormContact4.classList.contains("validI");
    
        const degers = [deger1, deger2, deger3, deger4];
    
        const allValid = degers.every(deger => deger === true);
    
        const nextButton = document.getElementById("slideFormContactBtnNext");
        if (allValid) {
            nextButton.disabled = false;
            if(!stepByStepNavContact.classList.contains("completed")) {
                stepByStepNavContact.classList.add("completed")
            }
        } else {
            nextButton.disabled = true;
            if(stepByStepNavContact.classList.contains("completed")) {
                stepByStepNavContact.classList.remove("completed")
            }
        }
    }

    // Ad-Soyad İnputu  (En az 6 karakter uzunluğunda ve boşluk içermesi gerekiyor)
    slideFormContact1.addEventListener("input", (e)=> {
        if(e.target.value.length >= 6 && e.target.value.includes(" ")) {
            e.target.classList.add("validI");
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // E-posta İnputu (.com ile bitmesi gerekiyor)
    slideFormContact2.addEventListener("input", (e) => {
        const emailValue = e.target.value;
        // E-posta doğrulaması: en az bir karakter, @ işareti, en az bir karakter, .com ile bitmesi
        const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;

        if (emailPattern.test(emailValue)) {
            e.target.classList.add("validI");
        } else {
            if (e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // Telefon Numarası İnputu  (Aşağıdaki REGEX düzenlerinde olucak)
    slideFormContact3.addEventListener("input", (e) => {
        const phoneValue = e.target.value;
        const validFormat1 = /^0\d{10}$/; // 05555555555 formatı
        const validFormat2 = /^\d{10}$/; // 5555555555 formatı
        const validFormat3 = /^0\d{3} \d{3} \d{2} \d{2}$/; // 0555 555 55 55 formatı
        const validFormat4 = /^\d{3} \d{3} \d{2} \d{2}$/; // 555 555 55 55 formatı
        const validFormat5 = /^\+90\d{10}$/; // +905555555555 formatı
        const validFormat6 = /^\+90 \d{3} \d{3} \d{2} \d{2}$/; // +90 555 555 55 55 formatı
        const validFormat7 = /^0\d{3} \d{2} \d{2} \d{3}$/; // 0555 55 55 555 formatı
        const validFormat8 = /^0\d{3} \d{2} \d{3} \d{2}$/; // 0555 55 555 55 formatı
        const validFormat9 = /^\d{3} \d{2} \d{2} \d{3}$/; // 555 55 55 555 formatı
        const validFormat10 = /^\d{3} \d{2} \d{3} \d{2}$/; // 555 55 555 55 formatı
        const validFormat11 = /^\+90 \d{3} \d{2} \d{2} \d{3}$/; // +90 555 55 55 555 formatı
        const validFormat12 = /^\+90 \d{3} \d{2} \d{3} \d{2}$/; // +90 555 55 555 55 formatı
        const validFormat13 = /^\+90 \d{3} \d{3} \d{2} \d{3}$/; // +90 555 555 55 555 formatı
        const validFormat14 = /^\+90 \d{3} \d{3} \d{3} \d{2}$/; // +90 555 555 555 55 formatı
        
        if (validFormat1.test(phoneValue) || validFormat2.test(phoneValue) || 
        validFormat3.test(phoneValue) || validFormat4.test(phoneValue) ||
        validFormat5.test(phoneValue) || validFormat6.test(phoneValue) ||
        validFormat7.test(phoneValue) || validFormat8.test(phoneValue) ||
        validFormat9.test(phoneValue) || validFormat10.test(phoneValue) ||
        validFormat11.test(phoneValue) || validFormat12.test(phoneValue) ||
        validFormat13.test(phoneValue) || validFormat14.test(phoneValue)) {
            e.target.classList.add("validI");
        } else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // İşletme/Şirket İsmi İnputu (En az 6 karakter uzunluğunda)
    slideFormContact4.addEventListener("input", (e)=> {
        if(e.target.value.length >= 6) {
            e.target.classList.add("validI");
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });


    const slideFormContactBtnNext = document.getElementById("slideFormContactBtnNext");

    slideFormContactBtnNext.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(-100%)";
            document.getElementById("stepByStepNavContact").classList.remove("active");
            document.getElementById("stepByStepNavScope").classList.add("active");
        })
    })
}
