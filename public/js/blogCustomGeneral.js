document.addEventListener("DOMContentLoaded", () => {
    // Share Modalının  Açma Kaptma İşlevi
    addlistenerToShareBtnAndModalCloseBtn ();

    // Share Modalındaki Twitterda Paylaşma Fonksiyonu
    addListenerToShareXBtn ();
});




// ShareModalFunctions

// openShareModal
function openShareModal (modal) {
    modal.classList.remove("hidden");
};

// closeShareModal
function closeShareModal (modal) {
    modal.classList.add("hidden");
};

//addListenerToShareButton

function addlistenerToShareBtnAndModalCloseBtn () {
    const blogShareBtn = document.getElementById("blogShareBtn");
    const shareModal = document.querySelector(".blogShareViaModal");
    const closeShareModalBtn = document.getElementById("closeShareModal");

    blogShareBtn.addEventListener("click", (e) => {
        if(shareModal.classList.contains("hidden")) {
            openShareModal(shareModal);
        };
    });
    closeShareModalBtn.addEventListener("click", (e) => {
        if(!shareModal.classList.contains("hidden")) {
            closeShareModal(shareModal);
        }
    });
};




// Buradaki fonksiyonlar dinamik hale getirilecek gerek ejs gerek başka bir çözüm ile !!!!

// addListenerToShareOnTwitterBtn
function addListenerToShareXBtn () {
    const shareOnXBtn = document.getElementById("shareOnXBtn");
    const url = encodeURIComponent('https://blog.esesoftware.com/mehmet-gungor-what-is-node-js-runtime');
    const text = encodeURIComponent('Check out this blog post on Node.js Runtime!');
    const twitterUrl = `https://twitter.com/share?url=${url}&text=${text}`;
    console.log(twitterUrl)

    shareOnXBtn.addEventListener("click", (e) => {
        window.open(twitterUrl, '_blank');
    });
};