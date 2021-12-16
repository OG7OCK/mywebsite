export default class Slider {
    constructor({
        container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate = false,
        autoPlay = false
    } = {}) {
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch (error) {}
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.next = document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoPlay = autoPlay;
    }


}