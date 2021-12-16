import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns, next, prev) {
        super(btns, next, prev);
        try {
            this.slides = this.container.children;
        } catch (error) {}
    }

    showSlides(n) {
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1
            }
    
            if (n < 1) {
                this.slideIndex = this.slides.length
            }
    
            this.slides.forEach(slide => {
                slide.style.display = 'none';
            })
    
            this.slides[this.slideIndex-1].style.display = 'block';
    
            try {
                this.hanson.style.opacity = '0';
                if (n === 3) {
                    this.hanson.classList.add('animated');
                    setTimeout(()=>{
                        this.hanson.style.opacity = '1';
                        this.hanson.classList.add('slideInUp');
                    }, 3000)
                } else {
                    this.hanson.classList.remove('slideInUp');
                }
            } catch(e) {}
        } catch (error) {}
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            })

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1
                this.showSlides(this.slideIndex);
            })
        })

        if (this.next && this.prev) {
            try {
                this.next.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.plusSlides(1)
                    })
                })
                this.prev.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.plusSlides(-1)
                    })
                })
            } catch (error) {}
        }
    }

    init() {

        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e){}

        this.bindTriggers()
        this.showSlides(this.slideIndex);

    }
}