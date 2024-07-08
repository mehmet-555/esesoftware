

// DİKKAT FORM VALİDASYONLARINDA BİR DEĞİŞİKLİK, GÜNCELLEME VEYA DÜZELTME GEREKSİNİMİ OLDUĞUNDA BURADA DÜZELTME YAPILACAK VE (https://www.uglifyjs.net/) DEN MİNİFY EDİLDİKTEN SONRA MİNİFY EDİLMİŞ HALİ -->  fv.js  <-- OLARAK public/js KLASÖRÜNE ATILCAKTIR.


// export default class FormValidator {
//     constructor() {
//         this.steps = document.querySelectorAll(".slideStepC");
//         this.navItems = document.querySelectorAll("[data-stepnav]");
//         this.init();
//     }

//     init() {
//         document.addEventListener("DOMContentLoaded", () => {
//             this.validateSteps();
//         });
//     }

//     validateSteps() {
//         this.steps.forEach((step, index) => {
//             const inputs = step.querySelectorAll("[data-validate]");
//             const nextButton = step.querySelector(".btn-next");
//             const backButton = step.querySelector(".btn-back");
//             const submitButton = step.querySelector("button[type='submit']");

//             step.addEventListener("input", (e) => {
//                 if (e.target.matches("[data-validate]")) {
//                     this.validateInputs(inputs, nextButton, backButton, submitButton, index);
//                 }
//             });

//             step.addEventListener("click", (e) => {
//                 if (e.target.matches("[data-validate][type='radio']") || e.target.matches("[data-validate][type='checkbox']")) {
//                     this.validateInputs(inputs, nextButton, backButton, submitButton, index);
//                 }
//             });

//             if (nextButton) {
//                 nextButton.addEventListener("click", () => {
//                     this.showStep(index + 1);
//                     setTimeout(()=>{
//                         const t = document.documentElement.clientWidth < 450 ? 130 : 0;
//                         window.scrollTo({
//                             top: t,
//                             behavior: 'smooth'
//                         })
//                     }, 400)
//                 });
//             }

//             if (backButton) {
//                 backButton.addEventListener("click", () => {
//                     this.showStep(index - 1);
//                     setTimeout(()=>{
//                         const t = document.documentElement.clientWidth < 450 ? 130 : 0;
//                         window.scrollTo({
//                             top: t,
//                             behavior: 'smooth'
//                         })
//                     }, 400)
//                 });
//             }
//         });
//     }

//     validateInputs(inputs, nextButton, backButton, submitButton, index) {
//         let allValid = true;

//         inputs.forEach(input => {
//             if (!this.isValid(input)) {
//                 allValid = false;
//                 input.classList.remove("validI");
//             } else {
//                 input.classList.add("validI");
//             }
//         });

//         if (nextButton) nextButton.disabled = !allValid;
//         if (backButton) backButton.disabled = !allValid;
//         if (submitButton) submitButton.disabled = !allValid;

//         if (allValid) {
//             this.navItems[index].classList.add("completed");
//         } else {
//             this.navItems[index].classList.remove("completed");
//         }
//     }

//     isValid(input) {
//         const value = input.value;
//         const validateType = input.dataset.validate;

//         switch (validateType) {
//             case "name":
//                 return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})+$/.test(value);
//             case "email":
//                 return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
//             case "phone":
//                 return /^(05\d{9}|5\d{9})$/.test(value.replace(/\s+/g, ''));
//             case "company":
//                 return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(value);
//             case "projectName":
//                 return /^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(value);
//             case "targetGroup":
//                 return value.length >= 4;
//             case "select":
//                 return value !== "default";
//             case "textarea":
//                 return value.length >= 30;
//             case "radio":
//                 return Array.from(document.querySelectorAll(`input[name="${input.name}"]`)).some(radio => radio.checked);
//             case "check":
//                 return Array.from(document.querySelectorAll(`input[name="${input.name}"]`)).some(checkBox => checkBox.checked);
//             default:
//                 return false;
//         }
//     }

//     showStep(index) {
//         if (index < 0 || index >= this.steps.length) return;

//         const stepWidth = 100;
//         this.steps.forEach(step => {
//             step.style.transform = `translateX(-${stepWidth * index}%)`;
//         });

//         this.navItems.forEach((navItem, i) => {
//             if (i === index) {
//                 navItem.classList.add("active");
//             } else {
//                 navItem.classList.remove("active");
//             }
//         });

//         setTimeout(() => {
//             const scrollPosition = document.documentElement.clientWidth < 450 ? 130 : 0;
//             window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
//         }, 500);
//     }
// }