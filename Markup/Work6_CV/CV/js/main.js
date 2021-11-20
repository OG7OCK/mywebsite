'use strict'

// Slider

const sliderBlock = document.querySelector('.photo');
const slides = sliderBlock.querySelectorAll('img');
const navigationBlock = sliderBlock.querySelector('.dots');

slider(slides, navigationBlock)







function slider(slideBlocks, dotBlocks) {
    //navigation
    slideBlocks.forEach((slide, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.width = '7px';
        dot.style.height = '7px';
        dot.style.borderRadius = '50%';
        dot.style.transition = 'all 350ms ease-in-out';
        dot.style.backgroundColor = 'rgb(221, 221, 221)';
        dot.id = `${i}`;
        dotBlocks.append(dot)
    })

    //navigation start
    slideBlocks[0].classList.add('show')
    const dots = document.querySelectorAll('.dot');
    slides.forEach((item,i) => {
        if (item.classList.contains('show')) {
            dots[i].classList.add('active')
        }
    })

    //listener
    navigationBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            swipe(dots, slides, e.target.id)
        }
    })


    function swipe(dotsBlock, slidesBlock, targetId) {

        dotsBlock.forEach((item, i) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        })
        slidesBlock.forEach(item => {
            if (item.classList.contains('show')) {
                item.classList.remove('show');
            }
        })
        dotsBlock[targetId].classList.add('active')
        slidesBlock[targetId].classList.add('show')
    }

}

//setInterval(autoSwipe, 3000)






//progressLine

const lines = document.querySelectorAll('.progress-line');


const skills = {

    html: "50%",
    js: "70%",
    photoshop: "45%",
    gulp: "45%",
    xml: "60%",
    teamwork: "90%",
    responsibility: "100%",
    selfmotivated: "100%",
    abletolearn: "100%",
    abletorelocate: "100%"

}

for (let key in skills) {
    lines.forEach(item => {
        if (item.classList.contains(`${key}`)) {
            item.style.width = `${skills[key]}`
        }
    })
}


//accordion

const cvLeftBlock = document.querySelector('.cv__left-block');
const cvLeftBlocks = cvLeftBlock.querySelectorAll('.left-block');
const triggers = cvLeftBlock.querySelectorAll('h2');

cvLeftBlocks.forEach(item => {
    const trigger = item.querySelector('h2');
    const block = item.querySelector('.description');
    item.addEventListener('click', (e)=> {
        if (e.target == trigger) {
            block.classList.toggle('off');
        }
    })

})


//popup

const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close')
popup.addEventListener('click', (e) => {
    if (e.target == popup || e.target == popupClose) {
        popup.style.display = 'none';
    }
})

function popupOn() {
    popup.style.display = 'flex';
}

setTimeout(popupOn, 5000)