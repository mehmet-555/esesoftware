
document.addEventListener("DOMContentLoaded", () => {

    // Contact Form Style Management Başlangıç
    const inputs = document.querySelectorAll(".contactFormT input, .contactFormT textarea");
    const setLabelStyle = (label, styles) => {
        Object.assign(label.style, styles);
    };

    inputs.forEach(input => {
        const label = input.previousElementSibling;
        input.addEventListener("focus", () => {
            setLabelStyle(label, {
                top: "0px",
                left: "5px",
                fontSize: "13px",
                color: "white"
            });
        });

        input.addEventListener("blur", () => {
            setLabelStyle(label, {
                fontSize: "16px",
                color: "#457576",
                top: input.value === "" ? "15px" : "5px",
                left: "5px"
            });
        });
    });
    // Contact Form Style Management Son




    // Sık Sorulan Sorulan (SSS) Başlangıç
    
    //  {Büyük Butonlar başlangıç}
    const sssBigBtns = document.querySelectorAll(".sssBigBtn");

    function plusToMinusAnimateTop(e) {
        sssBigBtns.forEach(sssBigBtn => {
            if(e.target === sssBigBtn) {
                e.target.firstElementChild.classList.add("active");
            }else {
                if(sssBigBtn.firstElementChild.classList.contains("active")) {
                    sssBigBtn.firstElementChild.classList.remove("active");
                }
            }
        })
        
    }
    function minusToPlusAnimateTop(e) {
        sssBigBtns.forEach(sssBigBtn => {
            if(e.target === sssBigBtn) {
                e.target.firstElementChild.classList.remove("active");
            }else {
                if(sssBigBtn.firstElementChild.classList.contains("active"))
                sssBigBtn.firstElementChild.classList.add("active");
            }
        })
    }

    sssBigBtns.forEach(sssBigBtn => {
        sssBigBtn.addEventListener("click", (e)=> {

            const acordionTopBody = e.target.closest("li").querySelector(".acordionTopBody");
            if(acordionTopBody.classList.contains("showBody")) {
                acordionTopBody.classList.remove("showBody");
                minusToPlusAnimateTop(e)
                closeAllInnerAcordionBodies ()
                e.target.closest("li").style.padding = "0rem";
            }else {
                document.querySelector(".sssArea").querySelectorAll(".sssTopLi").forEach(liElem => {
                    if(liElem.querySelector(".acordionTopBody").classList.contains("showBody")) {
                        liElem.querySelector(".acordionTopBody").classList.remove("showBody")
                        minusToPlusAnimateTop(e)
                        closeAllInnerAcordionBodies ()
                        liElem.style.padding = "0rem";
                    }
                })
                acordionTopBody.classList.add("showBody");
                plusToMinusAnimateTop(e)
                e.target.closest("li").style.padding = "1rem";
            }
        })
    })

    
    //  {Büyük Butonlar son}

    //  {Küçük Butonlar}
    const sssSmBtns = document.querySelectorAll(".sssSmBtn");

    function plusToMinusAnimateInner(e) {
        sssSmBtns.forEach(sssSmBtn => {
            if(e.target === sssSmBtn) {
                e.target.firstElementChild.classList.add("active");
            }else {
                if(sssSmBtn.firstElementChild.classList.contains("active")) {
                    sssSmBtn.firstElementChild.classList.remove("active");
                }
            }
        })
        
    }
    function minusToPlusAnimateInner(e) {
        sssSmBtns.forEach(sssSmBtn => {
            if(e.target === sssSmBtn) {
                e.target.firstElementChild.classList.remove("active");
            }else {
                if(sssSmBtn.firstElementChild.classList.contains("active"))
                    sssSmBtn.firstElementChild.classList.add("active");
            }
        })
    }
    function closeAllInnerAcordionBodies () {
        document.querySelectorAll(".sssInnerLi").forEach(sssInnerLiElem => {
            sssInnerLiElem.querySelector(".innerLiBtnAnim").classList.toggle("active", false);
            sssInnerLiElem.querySelector(".acordionInnerBody").classList.toggle("showBody", false);
        })
    }
    sssSmBtns.forEach(sssSmBtn => {
        sssSmBtn.addEventListener("click", (e)=> {

            const acordionInnerBody = e.target.closest("li").querySelector(".acordionInnerBody");
            if(acordionInnerBody.classList.contains("showBody")) {
                acordionInnerBody.classList.remove("showBody");
                minusToPlusAnimateInner(e)
            }else {
                document.querySelector(".sssArea").querySelectorAll(".sssInnerLi").forEach(liElem => {
                    if(liElem.querySelector(".acordionInnerBody").classList.contains("showBody")) {
                        liElem.querySelector(".acordionInnerBody").classList.remove("showBody")
                        minusToPlusAnimateInner(e)
                    }
                })
                acordionInnerBody.classList.add("showBody");
                plusToMinusAnimateInner(e)
            }
        })
    })
    // Sık Sorulan Sorulan (SSS) Son

});


// Sayfada Kaldığım Yer Başlangıç
window.addEventListener("beforeunload", function() {
    localStorage.setItem("scrollPosition", document.querySelector(".mainCustomheigth").scrollTop);
});

document.querySelector(".mainCustomheigth").addEventListener("scroll", function() {
    localStorage.setItem("scrollPosition", document.querySelector(".mainCustomheigth").scrollTop);
});

window.addEventListener("load", function() {
    var scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition !== null) {
        document.querySelector(".mainCustomheigth").scrollTop = parseInt(scrollPosition, 10);
    }
});
// Sayfada Kaldığım Yer Son