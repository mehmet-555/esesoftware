document.addEventListener("DOMContentLoaded", () => {

    labelStyles();

    // nextPageWithValueF ()
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

                const div2 = input.parentElement.nextElementSibling.firstElementChild;
                if (div2) {
                    div2.classList.remove('selected');
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
            const selectedDiv2 = i.parentElement.nextElementSibling.firstElementChild;
            if (selectedDiv2) {
                selectedDiv2.classList.add('selected');
            }
        });
    });
};
