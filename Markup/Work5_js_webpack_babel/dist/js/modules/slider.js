function slider() {

    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesField = document.querySelector('.offer__slider-field');
    const width = window.getComputedStyle(slides[0]).width;
    const dotField = document.createElement('ol');

    slidesField.style.width = `${width.slice(0, width.length-2) * slides.length + "px"}`;
    let offset = 0;
    let counter = 1;

    dotField.classList.add('carousel-indicators');
    slider.append(dotField)

    slides.forEach((item, index) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.id = index+1
        dotField.append(dot)
    })
    const dots = dotField.querySelectorAll('.dot');

    counterSlides(counter)
    dotActive(counter)

    next.addEventListener('click', () => {
        if (offset == width.slice(0, width.length-2) * (slides.length-1)) {
            offset = 0
            counter = 1
        } else {
            offset += +width.slice(0, width.length-2);
            counter+=1
        }
        move(offset)
        counterSlides(counter)
        dotActive(counter)
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = width.slice(0, width.length-2) * (slides.length-1)
            counter = slides.length
        } else {
            offset -= +width.slice(0, width.length-2);
            counter-=1
        }
        move(offset)
        counterSlides(counter)
        dotActive(counter)
    })

    function move(offset) {
        slidesField.style.transform = `translateX(-${offset}px)`;
        slidesField.style.transition = 'all 350ms ease-in-out';
    }

    // counter 

    function counterSlides(counter) {
        total.innerHTML = `
            0${slides.length}
        `
        current.innerHTML = `
            0${counter}
        `
    }


    // navigation

    function dotActive(counter) {
        dots.forEach(item => {
            if (item.id == counter) {
                item.style.opacity = 1
            } else {
                item.style.opacity = 0.5
            }
        })
    }

    dots.forEach(item => {
        item.addEventListener('click', ()=> {
            offset = (item.id - 1) * width.slice(0, width.length-2)
            counter = +item.id;
            counterSlides(counter)
            dotActive(counter)
            move(offset)
        })
    })

}

export default slider;