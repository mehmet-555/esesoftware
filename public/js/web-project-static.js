document.addEventListener("DOMContentLoaded", () => {
    initFormHandlers();
});

function initFormHandlers() {
    addInputValidationHandler("slideScopeFormNSI", "validInputText", 3);            //Kapsam (2) için yazdım
    addSelectValidationHandler("slideScopeFormPTS", "selectedOption", "default");   //Kapsam (2) için yazdım
}

function addInputValidationHandler(elementId, validClass, minLength) {                //Kapsam (2) için yazdım
    const inputElement = document.getElementById(elementId);
    inputElement.addEventListener("change", (e) => {
        toggleClass(e.target, validClass, e.target.value.length >= minLength);
    });
}

function addSelectValidationHandler(elementId, validClass, defaultValue) {            //Kapsam (2) için yazdım
    const selectElement = document.getElementById(elementId);
    selectElement.addEventListener("change", (e) => {
        toggleClass(e.target, validClass, e.target.value !== defaultValue);
    });
}

function toggleClass(element, className, condition) {                                 //Kapsam (2) için yazdım
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}