document.addEventListener("DOMContentLoaded", () => {

    //servisler ve hizmetler butonu
    addListenerToNavBtns ()

    // Servisler ve hizmetler Modal ı
    addListenerToNavRoleBtns ()
    updateModalPosition()
    // Mobile Lefft bar
    leftBarBtnListener ()
    mobileLeftBarNavliElemCollapseF();

    // Mobile RightBar
    ModalFunction ()
    // Footer ı gösterme
    showFooter ()

    // PagePagination
    setPageNav ()

    // Page scrollspy
    openFirstNavAcArea ()

    // href kontorl
    hrefControl()
});




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
function updateModalPosition() {
    const servicesBtn = document.querySelector(".navAnchorElem1");
    const servicesModal = document.querySelector(".servicesModal");
    const servicesBtnLeftDistance = servicesBtn.getBoundingClientRect().left;
    const leftString = `${(Number(servicesBtnLeftDistance) + 70) - 19*16}px`;
    servicesModal.style.left = leftString;
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
    
    modalServicesContent.innerHTML = ""; 
    content.forEach((liElem, idx) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = liElem;
        const liElement = tempDiv.firstChild;
        modalServicesContent.appendChild(liElement);
        setTimeout(() => {
            liElement.classList.add('visible');
        }, idx * 75);
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
            `<li class='fade-in'><a href="/services/gcp/redistribution-with-ae" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> AE ile Yeniden Dağıtım</a></li>`,
            `<li class='fade-in'><a href="/services/gcp/redistribution-with-cr" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Cloud Run ile Yeniden Dağıtım</a></li>`,
            `<li class='fade-in'><a href="/services/gcp/virtual-server-with-gce" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Compute Engine ile Sanal Sunucu</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Otomasyon</li>`,
            `<li class='fade-in'><a href="Otomasyon Çözümleri" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Otomasyon Çözümleri</a></li>`
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>İşletme / Kurumsal</li>`,
            `<li class='fade-in'><a href="/services/corparate/corparate-intranet-solutions" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span>Kurumsal İntranet Çözümleri</a></li>`,
            `<li class='fade-in'><a href="/services/corparate/qr-menu-application" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> İşletmeler için QR Menü Uygulaması</a></li>`,
        ],
        [   
            `<li class='fade-in text-lg font-medium text-[#adadad] ml-3 tracking-wider'>Web Scraping</li>`,
            `<li class='fade-in'><a href="/services/web-scraping/web-scraping-and-web-automation" class='inline-block w-full whitespace-nowrap py-2 px-3 bg-transparent hover:bg-[#10151e] rounded-lg transition-all duration-200'><span class='text-sm text-gray-400 mr-1'>></span> Web Scraping ve Web Otomasyonu</a></li>`
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


    mobileLeftBar.classList.replace("close", "open");
  
    mobileLeftBarBtn.firstElementChild.classList.add("open");
    mobileLeftBarBtn.firstElementChild.classList.remove("close");
}
function closeMobileLeftModal () {

    const mobileLeftBarBtn = document.getElementById("mobileLeftBarBtn");
    const mobileLeftBar = document.getElementById("mobileLeftBar");
    
    mobileLeftBar.classList.replace("open", "close");
    mobileLeftBarBtn.firstElementChild.classList.remove("open");
    const btns = document.querySelectorAll(".font-poppins .navLiABtnCollapse:not(.disabled)");
    closeAllBtnModals(btns);
}

function mobileLeftBarNavliElemCollapseF() {
    const btns = document.querySelectorAll(".font-poppins .navLiABtnCollapse:not(.disabled)");
    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
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
    const modal = document.querySelector(".mobileOptionsModalCntr ");

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
}
function closeMobileRightModal(modal) {
    modal.classList.replace("translate-x-0", "translate-x-full");
    convertBtnBackStyle();
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










function showFooter() {
    const footer = document.querySelector(".footer");
    const mainElem = document.querySelector(".servicesMainCH");
    const leftAsideSticky = document.querySelector(".leftAsideSticky");
    const rightAsideSticky = document.querySelector(".rightAsideSticky");
    const areaX = document.querySelector(".areaX");
    
    const footerHeight = window.getComputedStyle(footer).getPropertyValue("height");

    mainElem.firstElementChild.style.marginBottom = footerHeight;

    if (leftAsideSticky && areaX && rightAsideSticky) {
        const areaXWidth = window.getComputedStyle(areaX).getPropertyValue("width");

        leftAsideSticky.style.width = `calc(${areaXWidth} - 2px)`;
        rightAsideSticky.style.width = `calc(${areaXWidth} - 2px)`;
        leftAsideSticky.style.height = `calc(100vh - 4rem - ${footerHeight})`;
        rightAsideSticky.style.height = `calc(100vh - 4rem - ${footerHeight})`;
    } else {
        // console.error("Element not found.");
    }
}


window.addEventListener('load', showFooter);

window.addEventListener('resize', showFooter);






// PagePaginationNav func 

function setPageNav() {
    const pageNavElem = document.querySelector("[data-pageNav]");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            pageNavElem.style.opacity = "0";    
            pageNavElem.style.visibility = "hidden";    
        } else {
            pageNavElem.style.opacity = "1";    
            pageNavElem.style.visibility = "visible";
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Mobil veya negatif scroll için kontrol
    });
}



// scrollspy functions 

function openFirstNavAcArea () {
    const scrollspyNavACArr = document.querySelectorAll(".scrollspyNavAC");
    scrollspyNavACArr[0].classList.add("open");
    manuelOpenClose ();
    scrollspyInterSectionApi();
}

function manuelOpenClose () {
    const buttons = document.querySelectorAll(".leftAsideSticky [role='button']");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            buttons.forEach(button => {
                button.nextElementSibling.classList.remove("open");
            })
            if(!e.target.nextElementSibling.classList.contains("open")) {
                e.target.nextElementSibling.classList.add("open");
            }
        })
    })
}

function scrollspyInterSectionApi() {
    const headerSections = document.querySelectorAll(".entryfoheader");
    const viewportHeight = window.innerHeight;
    const dynamicBottomMargin = -(viewportHeight - 180) + 'px';
    const options = {
        root: null, 
        rootMargin: `-170px 0px ${dynamicBottomMargin} 0px`,
        threshold: 0.01
    };
    let activeLink = null;

    const callback = (entries, observer) => {

        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
            visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            const firstVisibleEntry = visibleEntries[0];
            const id = firstVisibleEntry.target.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${id}"]`);

            if (activeLink && activeLink !== navLink) {
                activeLink.classList.remove('active');
            }

            navLink.classList.add('active');
            activeLink = navLink;
        }

        const scrollspyNavACArr = document.querySelectorAll(".scrollspyNavAC");
        scrollspyNavACArr.forEach(scrollspyNavAC => {
            const isActive = scrollspyNavAC.querySelector("a.active") !== null;
            scrollspyNavAC.classList.toggle("open", isActive);
            const iconSpan = scrollspyNavAC.closest(".scrollspyNavA")?.querySelector(".scrollspyIconSpan");
            if (iconSpan) {
                iconSpan.classList.toggle("open", isActive);
                const nextElement = iconSpan.nextElementSibling;
                if (nextElement) {
                    nextElement.classList.toggle("active", isActive);
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    

    headerSections.forEach(section => observer.unobserve(section));
    headerSections.forEach(section => observer.observe(section));
}


// left sticky make overflow hidden
function handleScroll() {
    const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    
    const leftSticky = document.querySelector(".leftAsideSticky");
    const stickyHeight = window.getComputedStyle(leftSticky).getPropertyValue("height");
    
    const stickies = document.querySelectorAll(".leftAsideSticky, .rightAsideSticky");
    
    if (distanceFromBottom <= 150) {
        stickies.forEach(sticky => {
            sticky.style.maxHeight = `${stickyHeight}`;
            sticky.style.overflow = "hidden";
        });
    } else {
        stickies.forEach(sticky => {
            sticky.style.maxHeight = `5000px`;
            sticky.style.overflow = "visible";
        });
    }
}


window.addEventListener('load', scrollspyInterSectionApi);
window.addEventListener('resize', scrollspyInterSectionApi);
window.addEventListener('scroll', handleScroll);








function hrefControl() {
    // Navigasyon çubuğunuzun yüksekliğini burada belirtin
    const navbarHeight = 100; // Örneğin 70px yükseklikte bir navbarınız varsa

    // Tüm iç bağlantıları seç
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    // Her bağlantı için event listener ekle
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Varsayılan işlemi engelle
            e.preventDefault();

            // Hedef elementin ID'sini al
            const targetId = link.getAttribute('href').substring(1);
            
            const targetElement = document.getElementById(targetId);
            // console.log(targetElement)
            if (targetElement) {
                targetElement.firstElementChild.classList.add("styleHeader");
                setTimeout(() => {
                    targetElement.firstElementChild.classList.remove("styleHeader");
                }, 750);
                // Hedef elemente yumuşak bir şekilde scroll yap
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight, // Navbar yüksekliği kadar yukarıda durmasını sağla
                    behavior: 'smooth'
                });
            }
        });
    });
}