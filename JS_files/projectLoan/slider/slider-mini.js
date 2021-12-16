import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoPlay, slides) {
        super(container, next, prev, activeClass, animate, autoPlay, slides)
    }

    bindTriggers() {
        try {
            this.next[0].addEventListener('click', () => {
                if (this.slides[0].classList.contains('feed__item')) {
                    this.container.insertBefore(this.slides[0], this.prev[0]);
                    this.decorizeSlides()
                } else {
                    this.container.appendChild(this.slides[0])
                    this.decorizeSlides()
                }
    
                if (this.autoPlay) {
                    clearInterval(this.interval)
                }
            })
    
            this.prev[0].addEventListener('click', () => {
                if (this.slides[0].classList.contains('feed__item')) {
                    this.container.insertBefore(this.slides[this.slides.length-3], this.slides[0])
                    this.decorizeSlides()
                } else {
                    this.container.insertBefore(this.slides[this.slides.length-1], this.slides[0])
                    this.decorizeSlides()
                }
    
                if (this.autoPlay) {
                    clearInterval(this.interval)
                }
            })
        } catch (error) {}

    }

    decorizeSlides() {
        try {
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass)
                if (item.classList.contains('card-active')) {
                    item.lastElementChild.style.opacity = '0.4';
                    item.firstElementChild.lastElementChild.style.opacity = '0';
                }
            })
            this.slides[0].classList.add(this.activeClass);
            if (this.slides[0].classList.contains('card-active')) {
                this.slides[0].lastElementChild.style.opacity = '1';
                this.slides[0].firstElementChild.lastElementChild.style.opacity = '1';
            }
        } catch (error) {}

    }

    init() {
        try {
            if (this.container.classList.contains('feed__slider')) {
                this.container.style.cssText = `
                display: flex;
                overflow: hidden;
                align-item: flex-start;
            `
            } else {
                this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-item: flex-start;
            `
            }
            this.decorizeSlides()
            this.bindTriggers()
            this.autoInterval()
        } catch (error) {}
    }

    autoInterval() {
        try {
            if(this.autoPlay) {
                this.interval = setInterval(() => {
                    try {
                        this.next.click()
                    } catch (error) {}

                },5000)
                this.container.addEventListener('mouseleave', () => {
                    this.interval = setInterval(() => {
                        this.container.insertBefore(this.slides[0], this.prev[0])
                        this.decorizeSlides()
                    },5000)
                })
    
                this.container.addEventListener('mouseenter', () => {
                    clearInterval(this.interval)
                })
    
            }
        } catch (error) {}

    }
}