export default class t{constructor(){this.t=document.querySelectorAll(".slideStepC");this.i=document.querySelectorAll("[data-stepnav]");this.init()}init(){document.addEventListener("DOMContentLoaded",()=>{this.o()})}o(){this.t.forEach((t,e)=>{const a=t.querySelectorAll("[data-validate]");const s=t.querySelector(".btn-next");const i=t.querySelector(".btn-back");const c=t.querySelector("button[type='submit']");t.addEventListener("input",t=>{if(t.target.matches("[data-validate]")){this.u(a,s,i,c,e)}});t.addEventListener("click",t=>{if(t.target.matches("[data-validate][type='radio']")||t.target.matches("[data-validate][type='checkbox']")){this.u(a,s,i,c,e)}});if(s){s.addEventListener("click",()=>{this.l(e+1)})}if(i){i.addEventListener("click",()=>{this.l(e-1)})}})}u(t,e,a,s,i){let c=true;t.forEach(t=>{if(!this.h(t)){c=false;t.classList.remove("validI")}else{t.classList.add("validI")}});if(e)e.disabled=!c;if(a)a.disabled=!c;if(s)s.disabled=!c;if(c){this.i[i].classList.add("completed")}else{this.i[i].classList.remove("completed")}}h(t){const e=t.value;const a=t.dataset.validate;switch(a){case"name":return/^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})+$/.test(e);case"email":return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);case"phone":return/^(05\d{9}|5\d{9})$/.test(e.replace(/\s+/g,''));case"company":return/^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(e);case"projectName":return/^[A-Za-zşŞçÇğĞüÜöÖıİ]{3,}(?:\s[A-Za-zşŞçÇğĞüÜöÖıİ]{3,})*$/.test(e);case"targetGroup":return e.length>=4;case"select":return e!=="default";case"textarea":return e.length>=30;case"radio":return Array.from(document.querySelectorAll(`input[name="${t.name}"]`)).some(t=>t.checked);case"check":return Array.from(document.querySelectorAll(`input[name="${t.name}"]`)).some(t=>t.checked);default:return false}}l(a){if(a<0||a>=this.t.length)return;const e=100;this.t.forEach(t=>{t.style.transform=`translateX(-${e*a}%)`});this.i.forEach((t,e)=>{if(e===a){t.classList.add("active")}else{t.classList.remove("active")}});setTimeout(()=>{const t=document.documentElement.clientWidth<450?130:0;window.scrollTo({top:t,behavior:'smooth'})},500)}}






