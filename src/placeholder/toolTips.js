export default class Tooltip {
    constructor(selector) {
        this.tooltips = document.querySelectorAll(selector);
        this.init();
    }
    //Bu sınıfı daha sonrasında güncelleyerek span elementlerine bir mobil attribute ü birde masaüstü attribute ü ekleyerek değişken ortamlar için değişken data-content-location haline getireceğim. . . ..
    init() {
        this.tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => this.showTooltip(tooltip));
        tooltip.addEventListener('mouseleave', () => this.hideTooltip(tooltip));
        tooltip.addEventListener('click', (e) => this.toggleTooltip(tooltip, e));
        });

        document.addEventListener('click', (e) => {
        if (window.innerWidth <= 800) {
            this.tooltips.forEach(tooltip => {
            if (!tooltip.contains(e.target)) {
                this.hideTooltip(tooltip);
            }
            });
        }
        });
    }

    showTooltip(tooltip) {
        if (window.innerWidth > 800) {
            tooltip.classList.add('active');
        }
    }  

    hideTooltip(tooltip) {
        tooltip.classList.remove('active');
    }

    toggleTooltip(tooltip, event) {
        if (window.innerWidth <= 800) {
            event.stopPropagation();
            tooltip.classList.toggle('active');
        }
    }
}