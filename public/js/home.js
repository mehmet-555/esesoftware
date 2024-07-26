
document.addEventListener("DOMContentLoaded", () => {

    // ContactFormFunction
    contactFormAddStyleListenerFunc ()

    // SSSFunction
    sssAddListenerFunc ();

    // AiBgBtns
    aiBgBtnStyle()

    // aiBtRWDBtns
    aiRwdScrollFunc()

    //servisler ve hizmetler butonu
    addListenerToNavBtns ()

    // Servisler ve hizmetler Modal ı
    addListenerToNavRoleBtns ()

    // Mobile Lefft bar
    leftBarBtnListener ()
    mobileLeftBarNavliElemCollapseF();

    // Mobile RightBar
    ModalFunction ()

    // options modalında contact a tıkalyınca options modalını kaptma şeyleri
    addEventListenerToContactBtnOnOpt ()  


    // options modalında servicesBtn a tıklayınca mobilde left menuyu açma fonksiyonu 

    addEventListenerToservicesBtnOnRightModal()
});

function sssAddListenerFunc () {
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

    //  {Küçük Butonlar Başlangıç}
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
    //  {Küçük Butonlar Son}
    // Sık Sorulan Sorulan (SSS) Son
}


function contactFormAddStyleListenerFunc () {
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
                color: "#67afb1",
                top: input.value === "" ? "15px" : "5px",
                left: "5px"
            });
        });
    });
    // Contact Form Style Management Son
}


function aiBgBtnStyle() {
    const parags = [
        "Yapay zeka, büyük veri setlerini hızla analiz edebilir ve en doğru sonuçları çıkarabilir. Bu, projelerimizin erken aşamalarında daha sağlam temeller atmamıza yardımcı olur.",
        "AI, gelecekteki trendleri ve kullanıcı davranışlarını tahmin ederek daha stratejik kararlar almamızı sağlar. Bu sayede projelerimiz her zaman bir adım önde olur.",
        "Kod yazım sürecinde yapay zeka destekli araçlar kullanarak hataları minimize eder ve kod kalitesini artırırız. Ayrıca, AI tabanlı testler ile yazılımlarımızın güvenli ve sorunsuz çalışmasını sağlarız.",
        "Yapay zeka, yazılım test süreçlerinde olası hataları ve performans sorunlarını hızlıca tespit eder. Bu sayede, projelerimiz en yüksek kalitede kullanıma sunulur.",
        "Yazılımın piyasaya sürülmesinden sonra, yapay zeka tabanlı analiz araçlarıyla kullanıcı geri bildirimlerini ve performansı izleyerek sürekli iyileştirmeler yaparız."
    ]
    const btns = document.querySelectorAll(".aiBgBtn");
    Array.from(btns).forEach(btn => {
        btn.addEventListener("click", (e)=> {
            let index = 1;
            Array.from(btns).forEach(btn => {
                btn.classList.remove("active")
            })
            btn.classList.add("active");
            let btnNm = 1;
            Array.from(btns).forEach(btn => {
                
                if(!btn.classList.contains("active")) {
                    btnNm ++;
                }else {
                    index = btnNm;
                }
            })
            // console.log(index)
            setTimeout(() => {
                document.querySelector(".aiParamElem").textContent = parags[index - 1];
            }, 200);
        })
    })
}



function aiRwdScrollFunc() {
    const slideBtns = document.querySelectorAll(".slideBtn");
    const slideShow = document.querySelector(".slideShow");
    
    Array.from(slideBtns).forEach(slideBtn => {
        slideBtn.addEventListener("click", (e) => {
            const scrollAmount = parseInt(window.getComputedStyle(slideShow.parentElement).getPropertyValue("width"));
            // console.log(scrollAmount);
            
            const index = Number(slideBtn.dataset.index);
            let extraScroll = 0;

            switch (index) {
                case 0:
                    extraScroll = 0;
                    break;
                case 1:
                    extraScroll = 4;
                    break;
                case 2:
                    extraScroll = 8;
                    break;
                case 3:
                    extraScroll = 12;
                    break;
                case 4:
                    extraScroll = 16;
                    break;
                default:
                    extraScroll = 0;
                    break;
            }

            slideShow.scrollTo({ 
                left: (index * scrollAmount) + extraScroll, 
                behavior: 'smooth' 
            });
            // console.log(slideShow.scrollLeft);
        });
    });
     
    slideShow.addEventListener("scroll", (e) => {
        const scrollAmount = parseInt(window.getComputedStyle(slideShow.parentElement).getPropertyValue("width"));
        
        const positions = [
            0,
            (1 * scrollAmount) + 4,
            (2 * scrollAmount) + 8,
            (3 * scrollAmount) + 12,
            (4 * scrollAmount) + 16
        ];
    
        const slideBtns = document.querySelectorAll(".slideBtn");
    
        // Önce tüm butonlardan 'active' sınıfını kaldır
        slideBtns.forEach(slideBtn => {
            slideBtn.classList.remove('active');
        });
    
        let closestIndex = 0;
        let minDiff = Infinity;
        const currentScroll = slideShow.scrollLeft;
    
        // En yakın pozisyonu bul
        positions.forEach((position, index) => {
            const diff = Math.abs(currentScroll - position);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });
    
        // En yakın pozisyonun butonuna 'active' sınıfı ekle
        slideBtns.forEach(slideBtn => {
            if (Number(slideBtn.dataset.index) === closestIndex) {
                slideBtn.classList.add('active');
            }
        });
    });

}


















// Nav Buttons functions Başlangıç

function addListenerToNavBtns() {
    const navAnchorElem1 = document.querySelector(".navAnchorElem1");
    const servicesModal = document.querySelector(".servicesModal");

    const servicesBtn = document.querySelector(".navAnchorElem1");
    
    const navAnchorElem2s = document.querySelectorAll(".navAnchorElem2");

    Array.from(navAnchorElem2s).forEach(elem => {
        elem.addEventListener("mouseenter", (e)=> {
            setTimeout(() => {
                onElem2();
            }, 600);
        })
    })

    function onElem2() {
        if(servicesModal.classList.contains("open")) {
            servicesModal.classList.replace("open", "close");
            servicesBtn.nextElementSibling.classList.replace("left-0", "left-1/2");           //Burası kapatma ---   1  
            servicesBtn.nextElementSibling.classList.replace("w-full", "w-0");
            initalStateModal ()
            initialStateModalRightSide ()
        }
    }

    function updateModalPosition() {
        const servicesBtnLeftDistance = servicesBtn.getBoundingClientRect().left;
        const leftString = `${(Number(servicesBtnLeftDistance) + 70) - 19*16}px`;
        servicesModal.style.left = leftString;
    }

    navAnchorElem1.addEventListener("click", (e) => {
        e.preventDefault();
        
        updateModalPosition();

        if (servicesModal.classList.contains("close")) {
            servicesModal.classList.replace("close", "open");
            e.target.nextElementSibling.classList.replace("left-1/2", "left-0");          
            e.target.nextElementSibling.classList.replace("w-0", "w-full");                  
        } else {
            servicesModal.classList.replace("open", "close");
            e.target.nextElementSibling.classList.replace("left-0", "left-1/2");          
            e.target.nextElementSibling.classList.replace("w-full", "w-0");                  //Burası kapatma ---   2
            initalStateModal ()
            initialStateModalRightSide ()
        }
    });


    window.addEventListener("resize", (e)=> {
        updateModalPosition();
        if(window.innerWidth <= 768) {
            if(servicesModal.classList.contains("open")) {
                servicesModal.classList.replace("open", "close");
                servicesBtn.nextElementSibling.classList.replace("left-0", "left-1/2");            //Burası kapatma ---   3
                servicesBtn.nextElementSibling.classList.replace("w-full", "w-0");
                initalStateModal ()
                initialStateModalRightSide ()
            }
                 
        }
    })
    document.addEventListener("click", (e) => {
        if (!servicesModal.contains(e.target) && !navAnchorElem1.contains(e.target)) {
            if (servicesModal.classList.contains("open")) {
                servicesModal.classList.replace("open", "close");
                servicesBtn.nextElementSibling.classList.replace("left-0", "left-1/2");
                servicesBtn.nextElementSibling.classList.replace("w-full", "w-0");                    //Burası kapatma ---   4
                initalStateModal ()
                initialStateModalRightSide ()
            }
        }
    });
     
}

function initalStateModal () {
    const navRoleBtns = document.querySelectorAll(".navRoleBtns");
    const servicesActiveBtn = document.querySelector(".servicesActiveBtn");

    navRoleBtns.forEach(btn => {
        btn.firstElementChild.nextElementSibling.classList.remove("text-white");
        if(btn.dataset.index == 0) {
            btn.firstElementChild.nextElementSibling.classList.add("text-white");
        }
        servicesActiveBtn.classList.remove("top-0", "top-[60px]", "top-[120px]", "top-[180px]", "top-[240px]");
    })
} 


function addListenerToNavRoleBtns() {
    const navRoleBtns = document.querySelectorAll(".navRoleBtns");
    const servicesActiveBtn = document.querySelector(".servicesActiveBtn");

    navRoleBtns.forEach(roleBtn => {
        roleBtn.addEventListener("click", (e)=> {
            e.preventDefault();
        })
        roleBtn.addEventListener("mouseenter", (e) => {
            navRoleBtns.forEach(btn => {
                btn.firstElementChild.nextElementSibling.classList.remove("text-white");
                btn.firstElementChild.nextElementSibling.classList.add("text-[#ffffff99]");
            })
            e.target.firstElementChild.nextElementSibling.classList.add("text-white");
            servicesActiveBtn.classList.remove("top-0", "top-[60px]", "top-[120px]", "top-[180px]", "top-[240px]");
            showContentsOnServicesOnModal(roleBtn.dataset.index);
            switch (roleBtn.dataset.index) {
                case "0":
                    servicesActiveBtn.classList.add("top-0");
                    break;
                case "1":
                    servicesActiveBtn.classList.add("top-[60px]");
                    break;
                case "2":
                    servicesActiveBtn.classList.add("top-[120px]");
                    break;
                case "3":
                    servicesActiveBtn.classList.add("top-[180px]");
                    break;
                case "4":
                    servicesActiveBtn.classList.add("top-[240px]");
                    break;
            }
        });
    });
}

function initialStateModalRightSide() {
    const modalServicesContent = document.getElementById("modalServicesContent");
    const content = [
        `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Web Geliştirme</li>`,
        `<li class='fade-in'><a href="/services/web-services/creating-static-web-site" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Statik Web Sitesi Kurulumu</a></li>`,
        `<li class='fade-in'><a href="/services/web-services/creating-dynamic-web-app" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Web Uygulaması Geliştirme</a></li>`,
        `<li class='fade-in'><a href="/services/web-services/web-hosting-services" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Web Hosting</a></li>`,
        `<li class='fade-in'><a href="/services/web-services/ui-ux-development" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> UI / UX Tasarımı</a></li>`,
        `<li class='fade-in'><a href="/services/web-services/restructuring" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Yeniden Yapılandırma</a></li>`
    ];
    
    modalServicesContent.innerHTML = "";  // Önceki içerikleri temizleyin
    content.forEach((liElem, idx) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = liElem;
        const liElement = tempDiv.firstChild;
        modalServicesContent.appendChild(liElement);
        setTimeout(() => {
            liElement.classList.add('visible');
        }, idx * 75); // Her eleman için 75ms gecikme eklenir
    });
}

function showContentsOnServicesOnModal(index) {
    const modalServicesContent = document.getElementById("modalServicesContent");

    const contents = [
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Web Geliştirme</li>`,
            `<li class='fade-in'><a href="/services/web-services/creating-static-web-site" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Statik Web Sitesi Kurulumu</a></li>`,
            `<li class='fade-in'><a href="/services/web-services/creating-dynamic-web-app" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Web Uygulaması Geliştirme</a></li>`,
            `<li class='fade-in'><a href="/services/web-services/web-hosting-services" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Web Hosting</a></li>`,
            `<li class='fade-in'><a href="/services/web-services/ui-ux-development" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> UI / UX Tasarımı</a></li>`,
            `<li class='fade-in'><a href="/services/web-services/restructuring" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Yeniden Yapılandırma</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Google Cloud Platform</li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> AE ile Yeniden Dağıtım</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> FS Gerçek Zamanlı Senkronizasyon</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Cloud Run ile Serverless</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> AE ile Ölçeklendirilebilirlik</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> CS ile Depolama Alanı</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Otomasyon</li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 1</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 2</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 3</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 4</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 5</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>İşletme / Kurumsal</li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 1</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 2</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> QR Menü</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 4</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 5</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Web Scraping</li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 1</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 2</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 3</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 4</a></li>`,
            `<li class='fade-in'><a href="#" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Placeholder 5</a></li>`
        ]
    ];
    modalServicesContent.textContent = "";
    if (index >= 0 && index < contents.length) {
        contents[index].forEach((liElem, idx) => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = liElem;
            const liElement = tempDiv.firstChild;
            modalServicesContent.appendChild(liElement);

            setTimeout(() => {
                liElement.classList.add('visible');
            }, idx * 125); // Her eleman için 125ms gecikme eklenir
        });
    }
}










// LeftBarnav

window.addEventListener("resize", (e)=> {
    if(window.innerWidth >= 768) {
        closeMobileLeftModal();
    }
})


function leftBarBtnListener () {
    
    mobileLeftBarBtn.addEventListener("click", (e)=> {
        if(mobileLeftBar.classList.contains("close")) {
            openMobileLeftModal()
        }else {
            closeMobileLeftModal()
        }
    })
}

function openMobileLeftModal () {

    const mobileLeftBarBtn = document.getElementById("mobileLeftBarBtn");
    const mobileLeftBar = document.getElementById("mobileLeftBar");
    const mainElem = document.querySelector(".mainCustomheigth");


    mobileLeftBar.classList.replace("close", "open");
    document.body.style.overflow = "hidden";
    mainElem.style.overflow = "hidden";
    mainElem.style.filter = "blur(2px)";
    mainElem.style.pointerEvents = "none";
    mobileLeftBarBtn.firstElementChild.classList.add("open");
    mobileLeftBarBtn.firstElementChild.classList.remove("close");
}
function closeMobileLeftModal () {

    const mobileLeftBarBtn = document.getElementById("mobileLeftBarBtn");
    const mobileLeftBar = document.getElementById("mobileLeftBar");
    const mainElem = document.querySelector(".mainCustomheigth");
    
    mobileLeftBar.classList.replace("open", "close");
    document.body.style.overflow = "auto";
    mainElem.style.overflow = "auto";
    mainElem.style.filter = "none";
    mainElem.style.pointerEvents = "auto";
    mobileLeftBarBtn.firstElementChild.classList.remove("open");
    const btns = document.querySelectorAll(".font-poppins .navLiABtnCollapse:not(.disabled)");
    closeAllBtnModals(btns);
}

function mobileLeftBarNavliElemCollapseF() {
    const btns = document.querySelectorAll(".font-poppins .navLiABtnCollapse:not(.disabled)");
    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = e.currentTarget.nextElementSibling;
        if (modal.classList.contains("close")) {
          closeAllBtnModals(btns);
          openTargetBtnModal(modal);
        } else {
          closeAllBtnModals(btns);
          closeTargetBtnModal(modal);
        }
      });
    });
  }
  
  function openTargetBtnModal(modal) {
    modal.classList.replace("close", "open");
    modal.style.maxHeight = modal.scrollHeight + 'px';
    modal.style.opacity = '1';
    modal.previousElementSibling.classList.add("rotate");
  }
  
  function closeTargetBtnModal(modal) {
    modal.style.maxHeight = modal.scrollHeight + 'px';
    requestAnimationFrame(() => {
      modal.style.maxHeight = '0';
      modal.style.opacity = '1';
      modal.classList.replace("open", "close");
      modal.previousElementSibling.classList.remove("rotate");
    });
  }
  
  function closeAllBtnModals(btns) {
    btns.forEach(btn => {
      const modal = btn.nextElementSibling;
      if (modal.classList.contains("open")) {
        modal.style.maxHeight = modal.scrollHeight + 'px';
        requestAnimationFrame(() => {
          modal.style.maxHeight = '0';
          modal.style.opacity = '1';
          modal.classList.replace("open", "close");
          btn.classList.remove("rotate"); // rotate sınıfını kaldır
        });
      }
    });
  }
  
  



//  MobileRishtAsideModalF

function ModalFunction () {
    const navMenuBtn = document.getElementById("navMenuBtn");
    const modal = document.querySelector(".mobileOptionsModalCntr");

    navMenuBtn.addEventListener("click", (e)=> {
        if(modal.classList.contains("translate-x-full")) {
            openMobileRightModal(modal);
        }else {
            closeMobileRightModal(modal);
        }
    })
}

function openMobileRightModal(modal) {
    modal.classList.replace("translate-x-full", "translate-x-0");
    convertBtnStyle();

    closeMobileLeftModal ()

    const mainElem = document.querySelector(".mainCustomheigth");
    document.body.style.overflow = "hidden";
    mainElem.style.overflow = "hidden";
    mainElem.style.filter = "blur(2px)";
    mainElem.style.pointerEvents = "none";
}
function closeMobileRightModal(modal) {
    modal.classList.replace("translate-x-0", "translate-x-full");
    convertBtnBackStyle();

    const mainElem = document.querySelector(".mainCustomheigth");
    document.body.style.overflow = "auto";
    mainElem.style.overflow = "auto";
    mainElem.style.filter = "none";
    mainElem.style.pointerEvents = "auto";
}


function toggleClass(elementId, oldClass, newClass) {
    const element = document.getElementById(elementId);
    element.classList.replace(oldClass, newClass);
}

function convertBtnStyle() {
    const mappings = [
        ["pice1", "translate-y-0", "translate-y-[10px]"],
        ["pice2", "rotate-0", "rotate-45"],
        ["pice3", "rotate-0", "-rotate-45"],
        ["pice4", "max-w-[30px]", "max-w-0"],
        ["pice5", "translate-y-0", "translate-y-[-8px]"],
        ["pice6", "rotate-0", "-rotate-45"],
        ["pice7", "rotate-0", "rotate-45"]
    ];

    mappings.forEach(mapping => {
        toggleClass(mapping[0], mapping[1], mapping[2]);
    });
}

function convertBtnBackStyle() {
    const mappings = [
        ["pice1", "translate-y-[10px]", "translate-y-0"],
        ["pice2", "rotate-45", "rotate-0"],
        ["pice3", "-rotate-45", "rotate-0"],
        ["pice4", "max-w-0", "max-w-[30px]"],
        ["pice5", "translate-y-[-8px]", "translate-y-0"],
        ["pice6", "-rotate-45", "rotate-0"],
        ["pice7", "rotate-45", "rotate-0"]
    ];

    mappings.forEach(mapping => {
        toggleClass(mapping[0], mapping[1], mapping[2]);
    });
}





// options modalında contact a tıkalyınca options modalını kaptma şeyleri


function addEventListenerToContactBtnOnOpt ()  {
    const contacBtn = document.getElementById("contacBtn");
    const navMenuBtn = document.getElementById("navMenuBtn");

    contacBtn.addEventListener("click", (e)=>{
        navMenuBtn.click();

        setTimeout(function() {
            window.scrollTo({
                top: window.scrollY - 100,
                behavior: "smooth"
            });
            // console.log("çalıştı");
        }, 250); // scrollIntoView işleminin tamamlanmasını bekleyin
    });
};





// options modalında servicesBtn a tıklayınca mobilde left menuyu açma fonksiyonu 

function addEventListenerToservicesBtnOnRightModal() {
    const servicesAndServicesBtn = document.getElementById("servicesAndServicesBtn");

    const navMenuBtn = document.getElementById("navMenuBtn");
    const mobileLeftBarBtn = document.getElementById("mobileLeftBarBtn");

    if (window.innerWidth < 768) {
        servicesAndServicesBtn.addEventListener("click", (e) => {
            e.preventDefault();
            navMenuBtn.click();
            setTimeout(() => {
                mobileLeftBarBtn.click();
            }, 250);
        });
    }

}