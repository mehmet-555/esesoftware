document.addEventListener("DOMContentLoaded", () => {
    validateSteps();
});

function validateSteps() {
    const steps = document.querySelectorAll(".slideStepC");
    const navItems = document.querySelectorAll("[data-stepnav]");

    steps.forEach((step, index) => {
        const inputs = step.querySelectorAll("[data-validate]");
        const nextButton = step.querySelector(".btn-next");
        const backButton = step.querySelector(".btn-back");
        const submitButton = step.querySelector("button[type='submit']");

        step.addEventListener("input", (e) => {
            if (e.target.matches("[data-validate]")) {
                validateInputs(inputs, nextButton, backButton, submitButton, navItems, index);
            }
        });
        step.addEventListener("click", (e) => {
            if (e.target.matches("[data-validate][type='radio']")) {
                validateInputs(inputs, nextButton, backButton, submitButton, navItems, index);
            }
            if(e.target.matches("[data-validate][type='checkbox']")) {
                validateInputs(inputs, nextButton, backButton, submitButton, navItems, index)
            }
        });

        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                showStep(steps, navItems, index + 1);
                setTimeout(() => {
                    if (document.documentElement.clientWidth < 450) {
                        window.scrollTo({ top: 130, behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 500);
            });
        }
        if (backButton) {
            backButton.addEventListener("click", (e) => {
                showStep(steps, navItems, index - 1);
                setTimeout(() => {
                    if (document.documentElement.clientWidth < 450) {
                        window.scrollTo({ top: 130, behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 500);
            });
        }
        if (submitButton) {
            submitButton.addEventListener("click", (e) => {
                // console.log("awdadwa");
            })
        }
    });
}

function validateInputs(inputs, nextButton, backButton, submitButton, navItems, index) {
    let allValid = true;

    inputs.forEach(input => {
        if (!isValid(input)) {
            allValid = false;
            input.classList.remove("validI");
        } else {
            input.classList.add("validI");
        }
    });
    if (nextButton) {
        nextButton.disabled = !allValid;
    }
    if (backButton) {
        backButton.disabled = !allValid;
    }
    if (submitButton) {
        submitButton.disabled = !allValid;
    }
    if (allValid) {
        navItems[index].classList.add("completed");
    } else {
        navItems[index].classList.remove("completed");
    }
}

function isValid(input) {
    const value = input.value;
    const validateType = input.dataset.validate;

    switch (validateType) {
        case "name":
            const nameSurnamePattern = /^(?:[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}\s+)+[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}$/;
            return nameSurnamePattern.test(value);
        case "email":
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(value);
        case "phone":
            const phonePattern = /^(?:05\d{9}|5\d{9})$/;
            const removeSpaces = (value) => value.replace(/\s+/g, '');
            const cleanedValue = removeSpaces(value);
            return phonePattern.test(cleanedValue);
        case "company":
            const companyPattern = /^(?:[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}\s*)+$/;
            return companyPattern.test(value);
        case "projectName":
            const projectNamePattern = /^(?:[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}\s*)+$/;
            return projectNamePattern.test(value);
        case "targetGroup":
            return value.length >= 4;
        case "select":
            return value !== "default";
        case "textarea":
            return value.length >= 30;
        case "radio":
            const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
            return Array.from(radioGroup).some(radio => radio.checked);
        case "check":
            const checkGroup = document.querySelectorAll(`input[name="${input.name}"]`);
            return Array.from(checkGroup).some(checkBox => checkBox.checked);
        default:
            return false;
    }
}

function showStep(steps, navItems, index) {
    if (index < 0 || index >= steps.length) {
        return;
    }
    const stepWidth = 100;
    steps.forEach(step => {
        step.style.transform = `translateX(-${stepWidth * index}%)`;
    });
    navItems.forEach((navItem, i) => {
        if (i === index) {
            navItem.classList.add("active");
        } else {
            navItem.classList.remove("active");
        }
    });
}