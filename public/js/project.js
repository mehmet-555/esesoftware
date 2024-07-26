document.addEventListener("DOMContentLoaded", () => {

    labelStyles();

    nextPageWithValueF ()
});



// Labellerın borderını ve aradaki çizginin borderını değiştiren fonksiyon
function labelStyles() {
    const form = document.querySelector(".softwareTFormC");
    const inputs = form.querySelectorAll("input[type='radio']");

    inputs.forEach(i => {
        i.addEventListener("change", () => {
            inputs.forEach(input => {
                const label = input.closest('label');
                if (label) {
                    label.classList.remove('selected');
                }

                const div = input.parentElement;
                if (div) {
                    div.classList.remove('selected');
                }
            });

            const selectedLabel = i.closest('label');
            if (selectedLabel) {
                selectedLabel.classList.add('selected');
            }

            const selectedDiv = i.parentElement;
            if (selectedDiv) {
                selectedDiv.classList.add('selected');
            }
        });
    });
};

// Sonraki sayfayı getiren fonksiyon
function nextPageWithValueF () {
    const form = document.getElementById("softwareTForm");
    const inputs = form.querySelectorAll("input[type='radio']");

    let nextPageName;

    const softwareTypeSubmitBtn = document.getElementById("softwareTypeSubmitBtn");

    softwareTypeSubmitBtn.addEventListener("click", (e)=> {
        e.preventDefault();

        for (const i of inputs) {
            if (i.checked) {
                nextPageName = i.value;
                console.log(nextPageName);
                break;
            }
        }

        if (nextPageName) {
            const safeNextPageName = encodeURIComponent(nextPageName);
            const newUrl = `https://esesoftware.com/project/${safeNextPageName}`;
            console.log(newUrl);
            window.location.href = newUrl;
        } else {
            console.log("No radio button selected.");
        }
    })
}

// Required Spanı Spesifik Hover Olayı 

// let recipeMap = new Map([
//     [1, ""],
//     ['tomatoes', 350],
//     ['onion',    50]
// ]);

// function showRequiredDeatilF () {
//     const softwareTypeSpans = document.querySelectorAll(".requiredArea");

//     softwareTypeSpans.forEach(requiredSpan => {
//         if(requiredSpan.dataset.index === "0") {

//         }
//     })
// }