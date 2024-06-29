document.addEventListener("DOMContentLoaded", () => {
    labelStyles();
});



// Labellerın borderını değiştiren fonksiyon
function labelStyles() {
    const form = document.getElementById("softwareTForm");
    const inputs = form.querySelectorAll("input[type='radio']");

    inputs.forEach(i => {
        i.addEventListener("change", (e) => {
            inputs.forEach(input => {
                const label = input.closest('label');
                if (label) {
                    label.classList.remove('selected');
                }
            });

            inputs.forEach(input => {
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
}