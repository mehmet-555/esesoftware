document.addEventListener("DOMContentLoaded", () => {
    // Share Modalının  Açma Kaptma İşlevi
    addlistenerToShareBtnAndModalCloseBtn ();
    
    // Options Menu Modal İşlevi
    addEventListenerToOptBtn ()
    addListenerToMainForClosingTheOptMenu ()

    addBlurListenerToSearchInput ()



    // Buradan İtibaren servicesjs den gelenleri başlatıyorum
    // Href Control Başlıkları Gidip Stil Verme
    hrefControl()

    // Mobile Lefft bar
    leftBarBtnListener ()
    mobileLeftBarNavliElemCollapseF();

    // PagePagination
    setPageNav ()
    // Mobile RightBar
    ModalFunction ()
    // Page scrollspy
    openFirstNavAcArea ()
});


// ShareModalFunctions

// openShareModal
function openShareModal (modal) {
    modal.classList.remove("hidden");
    closeLeftBarIfopen ();
    copyLinkF ();
};

// closeShareModal
function closeShareModal (modal) {
    modal.classList.add("hidden");
};

//addListenerToShareButtonAndCloseButtonInModal

function addlistenerToShareBtnAndModalCloseBtn () {
    const blogShareBtn = document.getElementById("blogShareBtn");
    const shareModal = document.querySelector(".blogShareViaModal");
    const closeShareModalBtn = document.getElementById("closeShareModal");

    const input = document.querySelector(".blogShareViaModal").querySelector("input[value]");
    const copyButton = input.nextElementSibling;

    blogShareBtn.addEventListener("click", (e) => {
        if(shareModal.classList.contains("hidden")) {
            openShareModal(shareModal);
        };
    });
    closeShareModalBtn.addEventListener("click", (e) => {
        if(!shareModal.classList.contains("hidden")) {
            closeShareModal(shareModal);
            backCopiedF(copyButton);
        }
    });
};

// copylinkOnShareModalToUserPano 
function copyLinkF () {
    const input = document.querySelector(".blogShareViaModal").querySelector("input[value]");
    const copyButton = input.nextElementSibling;

    copyButton.addEventListener("click", function() {
        const blogUrl = input.value;
        console.log(blogUrl);

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(blogUrl).then(function() {
                console.log('Link panoya kopyalandı!');
                copiedF(copyButton);
            }, function(err) {
                console.error('Kopyalama başarısız:', err);
            });
        } else {
            console.log("clipboard çalışmiyir");
        }
    });
};

function copiedF(btn) {
    if(btn.firstElementChild.classList.contains("fa-regular")) {
        btn.firstElementChild.classList.replace("fa-regular", "fa-solid");
        btn.firstElementChild.nextElementSibling.innerText = "Kopyalandı";
    }
}
function backCopiedF(btn) {
    if(btn.firstElementChild.classList.contains("fa-solid")) {
        btn.firstElementChild.classList.replace("fa-solid", "fa-regular");
        btn.firstElementChild.nextElementSibling.innerText = "Kopyala";
    }
}
// leftbar açıksa kapat
function closeLeftBarIfopen () {
    const leftBar = document.getElementById("mobileLeftBar");
    const mobileLeftBarBtn = document.getElementById("mobileLeftBarBtn");

    if(leftBar.classList.contains("open")) {
        leftBar.classList.replace("open", "close");
        mobileLeftBarBtn.firstElementChild.classList.remove("open");
    }
}




// -------------------------------------
// bu kısım blog options menu için


function addEventListenerToOptBtn () {
    const blogsOptsBtn = document.querySelector(".blogsOptsBtn");

    blogsOptsBtn.addEventListener("click", (e)=> {
        e.stopPropagation();
        if(blogsOptsBtn.classList.contains("open")) {
            closeOptMenu(blogsOptsBtn);
        }else {
            openOptMenu(blogsOptsBtn);
        };
    })
}

function openOptMenu(btn) {
    btn.classList.add("open");
    btn.nextElementSibling.classList.remove("hidden");
    
}
function closeOptMenu(btn) {
    btn.classList.remove("open");
    btn.nextElementSibling.classList.add("hidden");
}

function addListenerToMainForClosingTheOptMenu () {
    const blogsOptsBtn = document.querySelector(".blogsOptsBtn");
    document.addEventListener("click", (e) => {
        e.stopPropagation();
        if(!e.target.closest(".blogOptMenu")) {
            closeOptMenu(blogsOptsBtn);
        }
    })
}







// Ortak fonksiyonlar services.js den geldi


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



// Show Footer Funcs

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
        console.error("Element not found.");
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
    const internalLinks = document.querySelectorAll('.leftAsideSticky a[href^="#"]');
    // console.log(internalLinks)
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
                targetElement.firstElementChild.firstElementChild.classList.add("styleHeader");
                console.log(targetElement.firstElementChild.firstElementChild)
                setTimeout(() => {
                    targetElement.firstElementChild.firstElementChild.classList.remove("styleHeader");
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



// NavbarTOp search func

function addBlurListenerToSearchInput () {
    const input = document.querySelector(".searchInput input");
    console.log(input)
    input.addEventListener("blur", (e) => {
        if(e.target.value !== "") {
            input.style.width = "224px";
        }else {
            input.style.width = "5rem";
        }
    });
    input.addEventListener("focus", (e) => {
            input.style.width = "224px";
    })
}






