document.addEventListener("DOMContentLoaded", (e)=> {

    validateContactAndActiveNBtn();
    validateScopeAndActiveNandBBtns();
    validateDetailsAndActiveNandBBtns();
    validateBudgetAndActiveNandBBtns();

});



var stepsArrays = Array.from(document.querySelectorAll(".slideStepC"));


// Contact Step Validate Function
function validateContactAndActiveNBtn () {
    // stepByStepNavContactLiElem

    const stepByStepNavContact = document.querySelector(".stepByStepNavContact");

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
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
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
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
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
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
        const phoneValue = e.target.value;
        const validFormat1 = /^0\d{10}$/; // 05555555555 formatı
        const validFormat2 = /^[1-9]\d{9}$/; // 5555555555 formatı
        
        if (validFormat1.test(phoneValue) || validFormat2.test(phoneValue)) {
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
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
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
            document.querySelector(".stepByStepNavContact").classList.remove("active");
            document.querySelector(".stepByStepNavScope").classList.add("active");
            console.log(document.querySelector(".stepByStepNavScope"))
        })
    })
}



// Scope Step Validate Function
function validateScopeAndActiveNandBBtns() {

    // stepByStepNavScopeLiElem

    const stepByStepNavScope = document.querySelector(".stepByStepNavScope");

    // Scope Form Inputs
    const slideFormScope1 = document.getElementById("slideFormScope1");
    const slideFormScope2 = document.getElementById("slideFormScope2");
    const slideFormScope3 = document.getElementById("slideFormScope3");  //label içerik s içindeki input 1
    const slideFormScope4 = document.getElementById("slideFormScope4");  //label içerik s içindeki input 2
    const slideFormScope5 = document.getElementById("slideFormScope5");  //label içerik s içindeki input 3
    const slideFormScopeContentInputs = [slideFormScope3, slideFormScope4, slideFormScope5];


    const slideFormScope6 = document.getElementById("slideFormScope6");  //label esinlenme içindeki input 1
    const slideFormScope7 = document.getElementById("slideFormScope7");  //label esinlenme içindeki input 2
    const slideFormScopeInspirderInputs = [slideFormScope6, slideFormScope7];
    
    function isValidAllInputSoActiveBtn() {
        const deger1 = slideFormScope1.classList.contains("validI");
        const deger2 = slideFormScope2.classList.contains("validI");
        const deger3 = slideFormScopeContentInputs.some(input => input.classList.contains('validI'));
        const deger4 = slideFormScopeInspirderInputs.some(input => input.classList.contains('validI'));
    
        const degers = [deger1, deger2, deger3, deger4];
    
        const allValid = degers.every(deger => deger === true);
    
        const nextButton = document.getElementById("slideFormScopeBtnNext");
        const backButton = document.getElementById("slideFormScopeBtnBack");
        if (allValid) {
            nextButton.disabled = false;
            backButton.disabled = false;
            if(!stepByStepNavScope.classList.contains("completed")) {
                stepByStepNavScope.classList.add("completed")
            }
        } else {
            nextButton.disabled = true;
            backButton.disabled = true;
            if(stepByStepNavScope.classList.contains("completed")) {
                stepByStepNavScope.classList.remove("completed")
            }
        }
    }

    // Proje Adı İnputu  (En az 6 karakter uzunluğunda)
    slideFormScope1.addEventListener("input", (e)=> {
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
        if(e.target.value.length >= 6) {
            e.target.classList.add("validI");
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // Select Box (Default değer hariç bir değer seçilmesi gerekiyor)
    slideFormScope2.addEventListener("change", (e)=> {
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
        if(e.target.value !== "default") {
            e.target.classList.add("validI")
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI")
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // İçerik Sağlama Kısmı 
    slideFormScopeContentInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            const currentStep = e.target.closest(".slideStepC").dataset.step;
            const currentStepEl = e.target.closest(".slideStepC");
            console.log(currentStep);
            // Önce tüm inputlardan validI sınıfını kaldır
            slideFormScopeContentInputs.forEach(i => {
                if(i.classList.contains("validI")) {
                    i.classList.remove("validI");
                }
            });
            // Tıklanan inputta validI sınıfı yoksa ekle
            if(!e.target.classList.contains("validI")) {
                e.target.classList.add("validI");
            }
            isValidAllInputSoActiveBtn()
        });
    });

    // Esinlenme Kısmı 
    slideFormScopeInspirderInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            const currentStep = e.target.closest(".slideStepC").dataset.step;
            const currentStepEl = e.target.closest(".slideStepC");
            console.log(currentStep);
            // Önce tüm inputlardan validI sınıfını kaldır
            slideFormScopeInspirderInputs.forEach(i => {
                if(i.classList.contains("validI")) {
                    i.classList.remove("validI");
                }
            });
            // Tıklanan inputta validI sınıfı yoksa ekle
            if(!e.target.classList.contains("validI")) {
                e.target.classList.add("validI");
            }
            isValidAllInputSoActiveBtn()
        });
    });



    const slideFormScopeBtnNext = document.getElementById("slideFormScopeBtnNext");
    const slideFormScopeBtnBack = document.getElementById("slideFormScopeBtnBack");

    slideFormScopeBtnNext.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(-200%)";
            document.querySelector(".stepByStepNavScope").classList.remove("active");
            document.querySelector(".stepByStepNavDetails").classList.add("active");
        })
    })
    slideFormScopeBtnBack.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(0%)";
            document.querySelector(".stepByStepNavScope").classList.remove("active");
            document.querySelector(".stepByStepNavContact").classList.add("active");
        })
    })
}



// Details Step Validate Function
function validateDetailsAndActiveNandBBtns() {

    // stepByStepNavDetailsLiElem

    const stepByStepNavDetails = document.querySelector(".stepByStepNavDetails");


    // Details Form Inputs
    const slideFormDetails1 = document.getElementById("slideFormDetails1");
    const slideFormDetails2 = document.getElementById("slideFormDetails2");
    const slideFormDetails3 = document.getElementById("slideFormDetails3");  //label yaş ort içindeki input 1
    const slideFormDetails4 = document.getElementById("slideFormDetails4");  //label yaş ort içindeki input 2
    const slideFormDetails5 = document.getElementById("slideFormDetails5");  //label yaş ort içindeki input 3
    const slideFormDetailsAgeAvInputs = [slideFormDetails3, slideFormDetails4, slideFormDetails5];

    function isValidAllInputSoActiveBtn() {
        const deger1 = slideFormDetails1.classList.contains("validI");
        const deger2 = slideFormDetails2.classList.contains("validI");
        const deger3 = slideFormDetailsAgeAvInputs.some(input => input.classList.contains('validI'));
    
        const degers = [deger1, deger2, deger3];
    
        const allValid = degers.every(deger => deger === true);
    
        const nextButton = document.getElementById("slideFormDetailsBtnNext");
        const backButton = document.getElementById("slideFormDetailsBtnBack");
        if (allValid) {
            nextButton.disabled = false;
            backButton.disabled = false;
            if(!stepByStepNavDetails.classList.contains("completed")) {
                stepByStepNavDetails.classList.add("completed")
            }
        } else {
            nextButton.disabled = true;
            backButton.disabled = true;
            if(stepByStepNavDetails.classList.contains("completed")) {
                stepByStepNavDetails.classList.remove("completed")
            }
        }
    }

    // Ürün ve Hizmetler TextAreası  (En az 30 karakter uzunluğunda)
    slideFormDetails1.addEventListener("input", (e)=> {
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
        if(e.target.value.length >= 30) {
            e.target.classList.add("validI");
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // Rakipleriniz ve Farkınız TextAreası  (En az 30 karakter uzunluğunda)
    slideFormDetails2.addEventListener("input", (e)=> {
        const currentStep = e.target.closest(".slideStepC").dataset.step;
        const currentStepEl = e.target.closest(".slideStepC");
        console.log(currentStep);
        if(e.target.value.length >= 30) {
            e.target.classList.add("validI");
        }else {
            if(e.target.classList.contains("validI")) {
                e.target.classList.remove("validI");
            }
        }
        isValidAllInputSoActiveBtn()
    });

    // Yaş Ortalaması Kısmı 
    slideFormDetailsAgeAvInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            const currentStep = e.target.closest(".slideStepC").dataset.step;
            const currentStepEl = e.target.closest(".slideStepC");
            console.log(currentStep);
            // Önce tüm inputlardan validI sınıfını kaldır
            slideFormDetailsAgeAvInputs.forEach(i => {
                if(i.classList.contains("validI")) {
                    i.classList.remove("validI");
                }
            });
            // Tıklanan inputta validI sınıfı yoksa ekle
            if(!e.target.classList.contains("validI")) {
                e.target.classList.add("validI");
            }
            isValidAllInputSoActiveBtn()
        });
    });

    const slideFormDetailsBtnNext = document.getElementById("slideFormDetailsBtnNext");
    const slideFormDetailsBtnBack = document.getElementById("slideFormDetailsBtnBack");

    slideFormDetailsBtnNext.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(-300%)";
            document.querySelector(".stepByStepNavDetails").classList.remove("active");
            document.querySelector(".stepByStepNavBudget").classList.add("active");
        })
    })
    slideFormDetailsBtnBack.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(-100%)";
            document.querySelector(".stepByStepNavDetails").classList.remove("active");
            document.querySelector(".stepByStepNavScope").classList.add("active");
        })
    })
} 


// Budget Step Validate Function
function validateBudgetAndActiveNandBBtns() {
    // stepByStepNavBudgetLiElem

    const stepByStepNavBudget = document.querySelector(".stepByStepNavBudget");

    // Details Form Inputs
    const slideFormBudget1 = document.getElementById("slideFormBudget1");  //label bütçe içindeki input 1
    const slideFormBudget2 = document.getElementById("slideFormBudget2");  //label bütçe içindeki input 2
    const slideFormBudget3 = document.getElementById("slideFormBudget3");  //label bütçe içindeki input 3
    const slideFormBudgetBudgetInputs = [slideFormBudget1, slideFormBudget2, slideFormBudget3];

    const slideFormBudget4 = document.getElementById("slideFormBudget4");  //label zamanlama içindeki input 1
    const slideFormBudget5 = document.getElementById("slideFormBudget5");  //label zamanlama içindeki input 2
    const slideFormBudget6 = document.getElementById("slideFormBudget6");  //label zamanlama içindeki input 3
    const slideFormBudgetTimingInputs = [slideFormBudget4, slideFormBudget5, slideFormBudget6];

    function isValidAllInputSoActiveBtn() {

        const deger1 = slideFormBudgetBudgetInputs.some(input => input.classList.contains('validI'));
        const deger2 = slideFormBudgetTimingInputs.some(input => input.classList.contains('validI'));
    
        const degers = [deger1, deger2];
    
        const allValid = degers.every(deger => deger === true);
    
        const backButton = document.getElementById("slideFormBudgetBtnBack");
        const submitButton = document.getElementById("slideFormBudgetBtnSubmit");
        if (allValid) {
            backButton.disabled = false;
            submitButton.disabled = false;
            if(!stepByStepNavBudget.classList.contains("completed")) {
                stepByStepNavBudget.classList.add("completed")
            }
        } else {
            backButton.disabled = true;
            submitButton.disabled = true;
            if(stepByStepNavBudget.classList.contains("completed")) {
                stepByStepNavBudget.classList.remove("completed")
            }
        }
    }

    // Bütçe Kısmı 
    slideFormBudgetBudgetInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            const currentStep = e.target.closest(".slideStepC").dataset.step;
            const currentStepEl = e.target.closest(".slideStepC");
            console.log(currentStep);
            // Önce tüm inputlardan validI sınıfını kaldır
            slideFormBudgetBudgetInputs.forEach(i => {
                if(i.classList.contains("validI")) {
                    i.classList.remove("validI");
                }
            });
            // Tıklanan inputta validI sınıfı yoksa ekle
            if(!e.target.classList.contains("validI")) {
                e.target.classList.add("validI");
            }
            isValidAllInputSoActiveBtn()
        });
    });


    // Zamanlama Kısmı 
    slideFormBudgetTimingInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            const currentStep = e.target.closest(".slideStepC").dataset.step;
            const currentStepEl = e.target.closest(".slideStepC");
            console.log(currentStep);
            // Önce tüm inputlardan validI sınıfını kaldır
            slideFormBudgetTimingInputs.forEach(i => {
                if(i.classList.contains("validI")) {
                    i.classList.remove("validI");
                }
            });
            // Tıklanan inputta validI sınıfı yoksa ekle
            if(!e.target.classList.contains("validI")) {
                e.target.classList.add("validI");
            }
            isValidAllInputSoActiveBtn()
        });
    });



    const slideFormBudgetBtnBack = document.getElementById("slideFormBudgetBtnBack");
    const slideFormBudgetBtnSubmit = document.getElementById("slideFormBudgetBtnSubmit");

    slideFormBudgetBtnBack.addEventListener("click", (e)=> {
        stepsArrays.forEach(stepElem => {
            stepElem.style.transform = "translate(-200%)";
            document.querySelector(".stepByStepNavBudget").classList.remove("active");
            document.querySelector(".stepByStepNavDetails").classList.add("active");
        })
    })
    slideFormBudgetBtnSubmit.addEventListener("click", (e)=> {
        e.preventDefault();
    })
}




// OPTİMİZE EDİLMİŞ HALİ(Diğer Form Türleri{web-statik, web-dynamic, automation ve other-Form} İçinde Geçerli Hale Getirilmiştir)















































