
function slider(mainBlock, items, dir, next, prev) {

    const sliderBlock = document.querySelector(mainBlock);
    const sliderItems = sliderBlock.querySelectorAll(items);
    const mainSlider = document.querySelector('.main-slider');
    const feedbackSlider = document.querySelector('.feedback-slider');
    const img = mainSlider.querySelectorAll('img');
    let paused = false;
    mainSlider.style.overflow = 'hidden';
    feedbackSlider.parentElement.parentElement.style.overflow = 'hidden';
    img.forEach(item => {
        item.style.width = '100%';
        item.style.height = '100%';
    })
    let sliderIndex = 1;

    function showSlides(n) {
        if (n > sliderItems.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = sliderItems.length;
        }

        sliderItems.forEach(item => {
            item.classList.add('animated');
            setTimeout(function() {
                item.style.display = 'none';
            },800)
        })
        setTimeout(function() {
            sliderItems[sliderIndex-1].style.display = 'block';
        },800)

    }

    showSlides(sliderIndex)

    function plusSlides(n) {
        showSlides(sliderIndex += n);
    }

    try {

        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            sliderItems[sliderIndex -1].classList.remove('slideInRight')
            sliderItems[sliderIndex -1].classList.add('slideOutLeft')
            plusSlides(-1)
            sliderItems[sliderIndex -1].classList.remove('slideOutRight')
            sliderItems[sliderIndex -1].classList.remove('slideInLeft')
            sliderItems[sliderIndex -1].classList.remove('slideOutLeft')
            sliderItems[sliderIndex -1].classList.add('slideInRight')
        })
        nextBtn.addEventListener('click', () => {
            sliderItems[sliderIndex -1].classList.remove('slideInLeft')
            sliderItems[sliderIndex -1].classList.add('slideOutRight')
            plusSlides(1)
            sliderItems[sliderIndex -1].classList.remove('slideInRight')
            sliderItems[sliderIndex -1].classList.remove('slideOutLeft')
            sliderItems[sliderIndex -1].classList.remove('slideOutRight')
            sliderItems[sliderIndex -1].classList.add('slideInLeft')
        })

    } catch(e) {}


    function activateAutoSwipe() {

        if (dir === 'vertical') {
            paused = setInterval(function() {
                sliderItems[sliderIndex -1].classList.remove('slideInDown')
                sliderItems[sliderIndex -1].classList.add('slideOutDown')
                plusSlides(1)
                sliderItems[sliderIndex -1].classList.remove('slideOutDown')
                sliderItems[sliderIndex -1].classList.add('slideInDown')
            }, 3000)
        } else if (dir === 'horizontal') {
    
            paused = setInterval(function() {
                sliderItems[sliderIndex -1].classList.remove('slideInLeft')
                sliderItems[sliderIndex -1].classList.add('slideOutRight')
                plusSlides(1)
                sliderItems[sliderIndex -1].classList.remove('slideInRight')
                sliderItems[sliderIndex -1].classList.remove('slideOutLeft')
                sliderItems[sliderIndex -1].classList.remove('slideOutRight')
                sliderItems[sliderIndex -1].classList.add('slideInLeft')
            }, 3000)
        }
    }

    sliderItems[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    sliderItems[0].parentNode.addEventListener('mouseleave', () => {
        activateAutoSwipe();
    });


}

export default slider;


