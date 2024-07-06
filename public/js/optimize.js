document.addEventListener("DOMContentLoaded", () => {
    validateSteps();
});

function validateSteps() {
    const steps = document.querySelectorAll(".slideStepC");
    const navItems = document.querySelectorAll(".stepByStepNav li");

    steps.forEach((step, index) => {
        const inputs = step.querySelectorAll("[data-validate]");
        const nextButton = step.querySelector(".btn-next");
        const backButton = step.querySelector(".btn-back");

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                validateInputs(inputs, nextButton, navItems, index);
            });

            if (input.type === "radio") {
                const radios = step.querySelectorAll(`input[name="${input.name}"]`);
                radios.forEach(radio => {
                    radio.addEventListener("click", () => {
                        validateInputs(inputs, nextButton, navItems, index);
                    });
                });
            } else {
                input.addEventListener("click", () => {
                    validateInputs(inputs, nextButton, navItems, index);
                });
            }
        });

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                showStep(steps, navItems, index + 1);
            });
        }

        if (backButton) {
            backButton.addEventListener("click", () => {
                showStep(steps, navItems, index - 1);
            });
        }
    });
}

function validateInputs(inputs, nextButton, navItems, index) {
    let allValid = true;

    inputs.forEach(input => {
        if (!isValid(input)) {
            allValid = false;
            input.classList.remove("validI");
        } else {
            input.classList.add("validI");
        }
    });

    nextButton.disabled = !allValid;
    if (allValid) {
        navItems[index].classList.add("completed");
    } else {
        navItems[index].classList.remove("completed");
    }
}

function isValid(input) {
    const value = input.value;
    const validateType = input.getAttribute("data-validate");

    switch (validateType) {
        case "nameSurname":
            return value.length >= 6 && value.includes(" ");
        case "email":
            const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
            return emailPattern.test(value);
        case "phone":
            const validFormat1 = /^0\d{10}$/;
            const validFormat2 = /^[1-9]\d{9}$/;
            return validFormat1.test(value) || validFormat2.test(value);
        case "company":
            return value.length >= 6;
        case "projectName":
            return value.length >= 6;
        case "select":
            return value !== "default";
        case "textarea":
            return value.length >= 30;
        case "radio":
            const radios = document.querySelectorAll(`input[name="${input.name}"]`);
            return Array.from(radios).some(radio => radio.checked);
        default:
            return false;
    }
}

function showStep(steps, navItems, index) {
    if (index < 0 || index >= steps.length) {
        return;
    }

    const stepWidth = 100; // Her adımın genişliği yüzde cinsinden

    steps.forEach((step, i) => {
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