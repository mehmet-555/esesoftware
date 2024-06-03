
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

    //  {Büyük Butonlar}
    const sssBigBtns = document.querySelectorAll(".sssBigBtn");
    sssBigBtns.forEach(sssBigBtn => {
        sssBigBtn.addEventListener("click", (e)=> {
            e.target.closest("li").style.padding = "1rem";
            e.target.closest("li").querySelector(".hidden").classList.remove("hidden")
        })
    })

    //  {Küçük Butonlar}
    const sssSmBtns = document.querySelectorAll(".sssSmBtn");
    sssSmBtns.forEach(sssSmBtn => {
        sssSmBtn.addEventListener("click", (e)=> {
            const closestUl = e.target.closest("ul");
            const otherBtns = closestUl.querySelectorAll(".sssSmBtn");
            otherBtns.forEach(otherBtn => {
                if(e.target !== otherBtn) {
                    otherBtn.click();
                }
            })
            e.target.closest("li").querySelector(".pCntr").classList.contains("hidden") ? e.target.closest("li").querySelector(".pCntr").classList.remove("hidden") : e.target.closest("li").querySelector(".pCntr").classList.add("hidden"); 
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