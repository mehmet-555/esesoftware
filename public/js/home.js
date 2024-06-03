
document.addEventListener("DOMContentLoaded", () => {

    // Contact Form Style Management
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
});



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