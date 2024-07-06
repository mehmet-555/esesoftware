document.addEventListener("DOMContentLoaded", () => {
    validateSteps();
});

function validateSteps() {
    const steps = document.querySelectorAll(".slideStepC");
    const navItems = document.querySelectorAll("[data-stepnav]");

    steps.forEach((step, index) => {
        const inputs = step.querySelectorAll("[data-validate]");
        const nextButton = step.querySelector(".btn.next");
        const backButton = step.querySelector(".btn-back");
        const submitButton = step.querySelector("button[type='submit']");

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                validateInputs(inputs, nextButton, backButton, submitButton, navItems, index);
            });

            if(input.type === "radio") {
                const radioGroup = step.querySelectorAll(`input[name="${input.name}"]`);
                radioGroup.forEach(radio => {
                    radio.addEventListener("click", () => {
                        validateInputs(inputs, nextButton, backButton, submitButton, navItems, index);
                    });
                });
            }
        });

        if(nextButton) {
            nextButton.addEventListener("click", (e) => {
                showStep(steps, navItems, index + 1);
            });
        }
        if(backButton) {
            backButton.addEventListener("click", (e) => {
                showStep(steps, navItems, index - 1)
            });
        }
        if(submitButton) {
            console.log("There is a submit button!");
        }
    });
};

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
    validateType = input.dataset.validate;

    switch (validateType) {
        case "name" :
            const nameSurnamePattern = /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,} [A-Za-zşŞçÇğĞüÜöÖıİ]{3,}$/;
            console.log(validateType);
            return nameSurnamePattern.test(value);
        case "email":
            const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
            console.log(validateType);
            return emailPattern.test(value);
        case "phone":
            const validFormat1 = /^0\d{10}$/;
            const validFormat2 = /^[1-9]\d{9}$/;
            console.log(validateType);
            return validFormat1.test(value) || validFormat2.test(value);
        case "company":
            console.log(validateType);
            return value.length >= 6;
        case "projectName":
            console.log(validateType);
            return value.length >= 6;
        case "select":
            console.log(validateType);
            return value !== "default";
        case "textarea":
            console.log(validateType);
            return value.length >= 30;
        case "radio":
            console.log(validateType);
            const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
            return Array.from(radioGroup).some(radio => radio.checked);
        default:
            console.log(validateType);
            return false;
    };
};

function showStep(steps, navItems, index) {
    if(index < 0 || index >= steps.length) {
        return;
    };

    const stepWidth = 100;
    steps.forEach((step, i) => {
        step.style.transform = `translateX(-${stepWidth * index}%)`;
    });

    navItems.forEach((navItem, i) => {
        if(i === index) {
            navItem.classList.add("active");
        }else {
            navItem.classList.remove("active");
        }
    });
};























