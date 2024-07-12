

// DİKKAT FORM VALİDASYONLARINDA BİR DEĞİŞİKLİK, GÜNCELLEME VEYA DÜZELTME GEREKSİNİMİ OLDUĞUNDA BURADA DÜZELTME YAPILACAK VE (https://www.uglifyjs.net/) DEN MİNİFY EDİLDİKTEN SONRA MİNİFY EDİLMİŞ HALİ -->  fv.js  <-- OLARAK public/js KLASÖRÜNE ATILCAKTIR.


export default class FormValidator {
    constructor() {
        this.steps = document.querySelectorAll(".slideStepC");
        this.navItems = document.querySelectorAll("[data-stepnav]");

        this.formData = {}; // Tüm form verilerini tutmak için nesne
    }

    init() {
        console.log("init çalıştı")
        this.validateSteps();
    }

    validateSteps() {
        console.log("validateInputs çalıştı")
        this.steps.forEach((step, index) => {
            const inputs = step.querySelectorAll("[data-validate]");
            const nextButton = step.querySelector(".btn-next");
            const backButton = step.querySelector(".btn-back");
            const submitButton = step.querySelector("#slideFormBudgetBtnSubmit");

            step.addEventListener("input", (e) => {
                if (e.target.matches("[data-validate]")) {
                    this.validateInputs(inputs, nextButton, backButton, submitButton, index);
                }
            });

            step.addEventListener("click", (e) => {
                if (e.target.matches("[data-validate][type='radio']") || e.target.matches("[data-validate][type='checkbox']")) {
                    this.validateInputs(inputs, nextButton, backButton, submitButton, index);
                }
            });

            if (nextButton) {
                nextButton.addEventListener("click", (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target.closest(".frm"));
                    this.collectFormData(formData); // Form verilerini toplama

                    this.showStep(index + 1);
                    setTimeout(()=>{
                        const t = document.documentElement.clientWidth < 450 ? 130 : 0;
                        window.scrollTo({
                            top: t,
                            behavior: 'smooth'
                        })
                    }, 400)
                });
            }

            if (backButton) {
                backButton.addEventListener("click", (e) => {
                    this.showStep(index - 1);
                    setTimeout(()=>{
                        const t = document.documentElement.clientWidth < 450 ? 130 : 0;
                        window.scrollTo({
                            top: t,
                            behavior: 'smooth'
                        })
                    }, 400)
                });
            }

            if(submitButton) {
                submitButton.addEventListener("click", (e)=> {
                    e.preventDefault();
                    console.log("SUBMIT BUTON TETİKLENDİ")
                    const formData = new FormData(e.target.closest(".frm"));
                    this.collectFormData(formData); // Son form verilerini de toplama
                    console.log("Final Form Data:", this.formData); // Tüm verileri gösterme

                    e.target.firstElementChild.classList.add("unvsble");
                    e.target.querySelector(".loader").classList.add("visible");


                    function fetchWithTimeout(url, options, timeout = 15000) {
                        return new Promise((resolve, reject) => {
                            const timer = setTimeout(() => {
                                reject(new Error('Request timed out'));
                            }, timeout);
                    
                            fetch(url, options)
                                .then(response => {
                                    clearTimeout(timer);
                                    resolve(response);
                                })
                                .catch(error => {
                                    clearTimeout(timer);
                                    reject(error);
                                });
                        });
                    }
                    
                    fetchWithTimeout('/project/web-project/static-web', {
                        method: 'POST',
                        body: JSON.stringify(this.formData),
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        console.log(response.ok)
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(data => {
                        console.log(data);
                        setTimeout(() => {
                            e.target.querySelector(".loader").classList.remove("visible");
                            e.target.querySelector(".tickSign").classList.add("visible");
                            this.cleanForm();
                            setTimeout(() => {
                                document.querySelector(".submitSuccessModal").classList.add("showModal");
                                this.steps.forEach(step => {
                                    step.style.transform = "translate(0%)";
                                    step.querySelector("button").disabled = true;
                                });
                                this.navItems.forEach(liElem => {
                                    liElem.classList.remove("active");
                                });
                                this.navItems[0].classList.add("active");
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }, 750);
                        }, 1500);
                    })
                    .catch(error => {
                        console.error('Error:', error);

                        setTimeout(() => {
                            e.target.querySelector(".loader").classList.remove("visible");
                            e.target.querySelector(".crossSign").classList.add("visible");
                            this.cleanForm();
                            setTimeout(() => {
                                document.querySelector(".submitErrorModal").classList.add("showModal");
                                this.steps.forEach(step => {
                                    step.style.transform = "translate(0%)";
                                    step.querySelector("button").disabled = true;
                                });
                                this.navItems.forEach(liElem => {
                                    liElem.classList.remove("active");
                                });
                                this.navItems[0].classList.add("active");
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }, 750);
                        }, 1500);
                    });
                })
            }
        });
    }

    cleanForm() {
        this.formData = {}; // Form verilerini temizle
        const inputs = document.querySelectorAll("[data-validate]");
        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                input.value = '';
            }
            input.classList.remove("validI");
        });

        this.navItems.forEach(navItem => {
            navItem.classList.remove("completed");
        });
    }

    collectFormData(formData) {
        formData.forEach((value, key) => {
            const elements = document.querySelectorAll(`[name="${key}"]`);
            if (elements.length > 1) {
                // Radyo butonları veya çoklu checkbox'lar için
                if (elements[0].type === 'radio') {
                    elements.forEach(element => {
                        if (element.checked) {
                            this.formData[key] = element.value;
                        }
                    });
                } else if (elements[0].type === 'checkbox') {
                    if (!Array.isArray(this.formData[key])) {
                        this.formData[key] = [];
                    }
                    elements.forEach(element => {
                        if (element.checked && !this.formData[key].includes(element.value)) {
                            this.formData[key].push(element.value);
                        }
                    });
                }
            } else {
                // Tek eleman
                const element = elements[0];
                if (element.type === 'checkbox') {
                    this.formData[key] = element.checked ? value : '';
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        this.formData[key] = value;
                    }
                } else {
                    this.formData[key] = value;
                }
            }
        });
    
        // Checkbox'ların "on" değerini düzeltme ve radioları kontrol etme
        for (const key in this.formData) {
            if (Array.isArray(this.formData[key])) {
                this.formData[key] = this.formData[key].filter(value => value !== 'on');
                if (this.formData[key].length === 0) {
                    delete this.formData[key];
                }
            } else if (this.formData[key] === 'on') {
                const elements = document.querySelectorAll(`[name="${key}"]`);
                elements.forEach(element => {
                    if (element.checked) {
                        this.formData[key] = element.value;
                    }
                });
            }
        }
    }
    




    validateInputs(inputs, nextButton, backButton, submitButton, index) {
        let allValid = true;

        inputs.forEach(input => {
            if (!this.isValid(input)) {
                allValid = false;
                input.classList.remove("validI");
            } else {
                input.classList.add("validI");
            }
        });

        if (nextButton) nextButton.disabled = !allValid;
        if (backButton) backButton.disabled = !allValid;
        if (submitButton) submitButton.disabled = !allValid;

        if (allValid) {
            this.navItems[index].classList.add("completed");
        } else {
            this.navItems[index].classList.remove("completed");
        }
    }

    isValid(input) {
        const value = input.value;
        const validateType = input.dataset.validate;

        switch (validateType) {
            case "name":
                return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})+$/.test(value);
            case "email":
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            case "phone":
                return /^(05\d{9}|5\d{9})$/.test(value.replace(/\s+/g, ''));
            case "company":
                return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(value);
            case "projectName":
                return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(value);
            case "targetGroup":
                return value.length >= 4;
            case "select":
                return value !== "default";
            case "textarea":
                return value.length >= 30;
            case "radio":
                return Array.from(document.querySelectorAll(`input[name="${input.name}"]`)).some(radio => radio.checked);
            case "check":
                return Array.from(document.querySelectorAll(`input[name="${input.name}"]`)).some(checkBox => checkBox.checked);
            default:
                return false;
        }
    }

    showStep(index) {
        if (index < 0 || index >= this.steps.length) return;

        const stepWidth = 100;
        this.steps.forEach(step => {
            step.style.transform = `translateX(-${stepWidth * index}%)`;
        });

        this.navItems.forEach((navItem, i) => {
            if (i === index) {
                navItem.classList.add("active");
            } else {
                navItem.classList.remove("active");
            }
        });

        setTimeout(() => {
            const scrollPosition = document.documentElement.clientWidth < 450 ? 130 : 0;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }, 500);
    }
}