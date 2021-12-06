window.addEventListener('DOMContentLoaded', () => {

let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
        let body=document.querySelector('body');
if(isMobile.any()){
        body.classList.add('touch');
        let arrow=document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
            let thisLink=arrow[i].previousElementSibling;
            let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i];

            thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
}else{
    body.classList.add('mouse');
}

// burger

const burger = document.querySelector('.chburger-icon__wrapper');
const burgerTrigger = document.querySelector('.burger-trigger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCompany = burgerMenu.querySelector('.company');
const burgerBuyer = burgerMenu.querySelector('.buyers');
const burgerCompanyList = burgerMenu.querySelector('.company-list');
const burgerBuyersList = burgerMenu.querySelector('.buyers-list');
const burgerCompanyArrow = burgerCompany.querySelector('.burger-arrow');
const burgerBuyersArrow = burgerBuyer.querySelector('.burger-arrow');
const content__first = document.querySelector('.content__first');
const content__second = document.querySelector('.content__second');
const content__header = document.querySelector('.content__header');
const content__third = document.querySelector('.content__third');
const content__fourth = document.querySelector('.content__fourth');
const content__five = document.querySelector('.content__five');
const content__six = document.querySelector('.content__six');
const content__seven = document.querySelector('.content__seven');
const content__eight = document.querySelector('.content__eight');
const content__nine = document.querySelector('.content__nine');
const content__ten = document.querySelector('.content__ten');
const content__eleven = document.querySelector('.content__eleven');
const content__footer = document.querySelector('.content__footer');
const content__modals = document.querySelector('.content__modals');

burgerTrigger.addEventListener('click', function(event) {
    console.log(event.target)
    burger.classList.toggle('on');
    if (burger.classList.contains('on')) {
        burgerMenu.style.left = '0';
        content__first.style.display = "none";
        content__second.style.display = "none";
        content__third.style.display = "none";
        content__fourth.style.display = "none";
        content__five.style.display = "none";
        content__six.style.display = "none";
        content__seven.style.display = "none";
        content__eight.style.display = "none";
        content__nine.style.display = "none";
        content__ten.style.display = "none";
        content__eleven.style.display = "none";
        content__footer.style.display = "none";
    } else {
        burgerMenu.style.left = '-100%';
        content__first.style.display = "block";
        content__second.style.display = "block";
        content__third.style.display = "flex";
        content__fourth.style.display = "block";
        content__five.style.display = "block";
        content__six.style.display = "block";
        content__seven.style.display = "block";
        content__eight.style.display = "flex";
        content__nine.style.display = "block";
        content__ten.style.display = "block";
        content__eleven.style.display = "block";
        content__footer.style.display = "flex";
    }
})


burgerCompany.addEventListener('click', function() {
    if (burgerBuyer.classList.contains('list-on')) {
        burgerBuyer.classList.remove('list-on');
        burgerBuyersList.classList.remove('listChild-on')
        burgerBuyersArrow.style.transform = 'rotate(45deg)';
    }
    burgerCompany.classList.toggle('list-on');
    burgerCompanyList.classList.toggle('listChild-on');
    if (burgerCompany.classList.contains('list-on')) {
        burgerCompanyArrow.style.transform = 'rotate(225deg)';
        burgerCompanyArrow.style.border = "solid #FFF";
        burgerCompanyArrow.style.borderWidth = "0 2px 2px 0";
    } else {
        burgerCompanyArrow.style.transform = 'rotate(45deg)';
        burgerCompanyArrow.style.border = "solid #27AE60";
        burgerCompanyArrow.style.borderWidth = "0 2px 2px 0";
    }
})

burgerBuyer.addEventListener('click', function() {
    if (burgerCompany.classList.contains('list-on')) {
        burgerCompany.classList.remove('list-on');
        burgerCompany.classList.remove('list-on');
        burgerCompanyList.classList.remove('listChild-on')
        burgerCompanyArrow.style.transform = 'rotate(45deg)';
    }
    burgerBuyer.classList.toggle('list-on');
    burgerBuyersList.classList.toggle('listChild-on');
    if (burgerBuyer.classList.contains('list-on')) {
        burgerBuyersArrow.style.transform = 'rotate(225deg)';
        burgerBuyersArrow.style.border = "solid #FFF";
        burgerBuyersArrow.style.borderWidth = "0 2px 2px 0";
    } else {
        burgerBuyersArrow.style.transform = 'rotate(45deg)';
        burgerBuyersArrow.style.border = "solid #27AE60";
        burgerBuyersArrow.style.borderWidth = "0 2px 2px 0";
    }
})


// Webp

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



// slider1

    const slides = document.querySelectorAll('.slide'),
          prev = document.querySelectorAll('.arrows__prev'),
          next = document.querySelectorAll('.arrows__next'),
          counter = document.querySelectorAll('.arrows__number'),
          sliderMenu = document.querySelector('.slider-menu'),
          sliderMenuMob = document.querySelector('.slider-menu-mob'),
          offerMob = sliderMenuMob.querySelector('.offer-trigger'),
          offer = sliderMenu.querySelector('.offer-trigger'),
          offerArrow = offer.querySelector('.slider-menu-mob-arrow'),
          offerArrowMob = offerMob.querySelector('.slider-menu-mob-arrow'),
          menuList = document.querySelector('.submenu');



offer.addEventListener('click', function() {
    offer.classList.toggle('openlist');
    if (offer.classList.contains('openlist')) {
        offerArrow.style.transform = 'rotate(225deg)';
        menuList.style.display = 'block';
    } else {
        offerArrow.style.transform = 'rotate(45deg)';
        menuList.style.display = 'none';
    }
})

offerMob.addEventListener('click', function() {
    offerMob.classList.toggle('openlist');
    if (offerMob.classList.contains('openlist')) {
        offerArrowMob.style.transform = 'rotate(225deg)';
        menuList.style.display = 'block';
    } else {
        offerArrowMob.style.transform = 'rotate(45deg)';
        menuList.style.display = 'none';
    }
})



    let slideIndex = 0;
    counter1(slideIndex, slides.length)

    next.forEach(item => {
        item.addEventListener('click', () => {
            if (slideIndex == slides.length-1) {
                slideIndex = 0
            } else {
                slideIndex+=1
            }
            show(slideIndex);
            console.log(slideIndex)
            counter1(slideIndex, slides.length);
        });
    })

    prev.forEach(item => {
        item.addEventListener('click', () => {
            if (slideIndex == 0) {
                slideIndex = slides.length-1
            } else {
                slideIndex-=1
            }
            show(slideIndex)
            counter1(slideIndex, slides.length)
        });
    })

    function show(index) {
        slides.forEach((item,i) => {
            if (item.classList.contains('visible')) {
                item.classList.remove('visible')
            }
            if (i == index) {
                slides[i].classList.add('visible')
            }
        });
        
    }
    
    function counter1(current, total) {
        counter.forEach(item => {
            item.innerHTML = `<span>${current+1}/${total}</span>`;
        });
    }

//slider2

const slider2__slides = Array.from(document.querySelectorAll('.slider-2__slider-item')),
      slider2__prev = document.querySelector('.slider-2__prev'),
      slider2__next = document.querySelector('.slider-2__next'),
      slider2__field = document.querySelector('.slider-2__wrapper-field'),
      slider2__wrapperWidth = window.getComputedStyle(slider2__slides[0]).width;


let offset = 0;
slider2__field.style.width = `${Math.round(slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length)} +'px'`;
slider2__next.addEventListener('click', () => {
    
    if (offset == Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length -3)) {
        offset = 0;
    } else {
        offset += Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2))
    }
    moveSlide(offset)
});

slider2__prev.addEventListener('click', () => {
    
    if (offset == 0) {
        offset = Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length -3);
    } else  {
        offset -= Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2))
    }
    moveSlide(offset)
});


function moveSlide(offset) {
    slider2__field.style.transform = `translateX(-${offset}px)`;
    slider2__field.style.transition = 'all 350ms ease-in-out';
}

//swipe for slider

slider2__field.addEventListener('touchstart', handleTouchStart, false);
slider2__field.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1 || !y1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    console.log(x2)

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    moveSlide(xDiff)
    if (Math.abs(xDiff)> Math.abs(yDiff)) {
        if (xDiff > 0) {
            if (offset == 0) {
                offset = Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length -3);
            } else  {
                offset -= Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2))
            }
            moveSlide(offset)
        } else {
            if (offset == Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length -3)) {
                offset = 0;
            } else {
                offset += Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2))
            }
            moveSlide(offset)
        }
    } else {
        if (yDiff > 0) {
            console.log("down")
        } else {
            console.log("top")
        }
    }
    x1 = null;
    y1 = null;
}





// openclose

const wrapperCase = document.querySelector('.wrapper-case'),
      buttonTrigger = document.querySelector('.buttonopenclose'),
      imgBg = document.querySelector('.ct4bg4'),
      oc = document.querySelector('.openclose'),
      gradient = document.querySelector('.gradient');

buttonTrigger.innerHTML = "<img src='img/openclose.png' alt=''><p>Показать больше</p>";

buttonTrigger.addEventListener('click', function () {
    imgBg.classList.toggle('show'),
    wrapperCase.classList.toggle('show'),
    buttonTrigger.classList.toggle('zindex1')
    gradient.classList.toggle('zindex'),
    oc.classList.toggle('zindex');

    if (buttonTrigger.classList.contains('zindex1')) {
        buttonTrigger.innerHTML = "<img src='img/openclose.png' alt=''><p>Свернуть обратно</p>";
    } else {
        buttonTrigger.innerHTML = "<img src='img/openclose.png' alt=''><p>Показать больше</p>";
    }
});


//slider-3

const slider3__slides = Array.from(document.querySelectorAll('.slider-3__item')),
      slider3__prev = document.querySelector('.slider-3__prev'),
      slider3__next = document.querySelector('.slider-3__next'),
      slider3__field = document.querySelector('.slider-3__field'),
      slider3__dotsArea = document.querySelector('.slider-3__dots'),
      slider3__dots = [],
      slider3__wrapperWidth = window.getComputedStyle(slider3__slides[0]).width;


let offset3 = 0;
let arrowdot = [];

slider3__field.style.width = `${Math.round(slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2)) * (slider3__slides.length)} +'px'`;

slider3__next.addEventListener('click', () => {
    
    if (offset3 == Math.round(+slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2)) * (slider3__slides.length -3)) {
        offset3 = 0;
        arrowdot.length = 0;
    } else {
        offset3 += Math.round(+slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2))
        arrowdot.length +=1
    }

    dotActive(arrowdot.length)
    moveSlide3(offset3)
});

slider3__prev.addEventListener('click', () => {
    
    if (offset3 == 0) {
        offset3 = Math.round(+slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2)) * (slider3__slides.length -3);
        arrowdot.length = 3
    } else  {
        offset3 -= Math.round(+slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2))
        arrowdot.length -=1
    }

    dotActive(arrowdot.length)
    moveSlide3(offset3)
});

function moveSlide3(offset3) {
    slider3__field.style.transform = `translateX(-${offset3}px)`;
    slider3__field.style.transition = 'all 350ms ease-in-out';
}

// navigation

for (let i = 0; i < slider3__slides.length; i++){
    if (i == 0 || i == slider3__slides.length-1) {
        continue
    }
    const dot = document.createElement('li');
    dot.classList.add('slider-3__dot');
    dot.setAttribute('data-slide-to', i+1);
    slider3__dotsArea.append(dot);
    slider3__dots.push(dot);
    dotActive(arrowdot.length)
}

function dotActive(index) {
    slider3__dots.forEach(dot => {
        dot.style.transform = "scale(1)"
        dot.style.backgroundColor = "#5E7288";
        dot.style.transition = 'all 350ms ease-in-out';
    })
    slider3__dots[index].style.transform = "scale(1.3)";
    slider3__dots[index].style.backgroundColor = "#27AE60";
    slider3__dots[index].style.transition = 'all 350ms ease-in-out';
};

    slider3__dots.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            offset3 = Math.round(+slider3__wrapperWidth.slice(0, slider3__wrapperWidth.length - 2)) * (slideTo - 2)
            arrowdot.length = slideTo - 2;
            moveSlide3(offset3)
            dotActive(arrowdot.length)
        })
    })


// slider-4

const like = document.querySelectorAll('#svg_2'),
      slider4__sliders = document.querySelectorAll('.slider-4'),
      slider4__navlinks = document.querySelectorAll('.navlink');

like.forEach((item, i) => {
    item.addEventListener('click', function() {
        item.classList.toggle('filled');
    })
});


slider4__sliders.forEach((item,i) => {
    let arr = item.querySelectorAll('.img-item');
    let loops = item.querySelectorAll('.loop');
    let slider4__slides = Array.from(item.querySelectorAll('.slider-4__item'));
    let slider4__prev = item.querySelector('.slider-4__prev');
    let slider4__next = item.querySelector('.slider-4__next');
    let slider4__field = item.querySelector('.slider-4__field');
    let slider4__dotsArea = item.querySelector('.slider-4__dots');
    let slider4__dots = [];
    let slider4__wrapperWidth = "288px";
    let offset4 = 0;
    let arrowdot4 = [];






    slider4__slides.forEach((item) => {
        let pcs = 1;
        let slider4__minus = item.querySelector('.minus');
        let slider4__plus = item.querySelector('.plus');
        let slider4__count = item.querySelector('.counter');
    
    
        slider4__count.innerHTML = `<h2>${pcs} шт.</h2>`;
        slider4__plus.addEventListener('click', function() {
            slider4__count.innerHTML = `<h2>${++pcs} шт.</h2>`;
        })
        slider4__minus.addEventListener('click', function() {
            if (pcs == 1) {
                slider4__count.innerHTML = `<h2>1 шт.</h2>`;
            } else {
                slider4__count.innerHTML = `<h2>${--pcs} шт.</h2>`;
            }
        })
    });

    slider4__field.style.width = `${Math.round(slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2)) * (slider4__slides.length)} +'px'`;
    slider4__next.addEventListener('click', () => {
    
        if (offset4 == Math.round(+slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2)) * (slider4__slides.length - 4)) {
            offset4 = 0;
            arrowdot4.length = 0;
        } else {
            offset4 += Math.round(+slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2))
            arrowdot4.length +=1
        }
        dotActive4(arrowdot4.length)
        moveSlide4(offset4)
    });

    slider4__prev.addEventListener('click', () => {
    
        if (offset4 == 0) {
            offset4 = Math.round(+slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2)) * (slider4__slides.length - 4);
            arrowdot4.length = 4
        } else  {
            offset4 -= Math.round(+slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2))
            arrowdot4.length -=1
        }
        dotActive4(arrowdot4.length)
        moveSlide4(offset4)
    });

    function moveSlide4(offset4) {
        slider4__field.style.transform = `translateX(-${offset4}px)`;
        slider4__field.style.transition = 'all 350ms ease-in-out';
    }

    // navigation

for (let i = 0; i < slider4__slides.length; i++){
    if (i== 0 || i == slider4__slides.length-1 || i == slider4__slides.length-2) {
        continue
    } else {
        let dot4 = document.createElement('li');
        dot4.classList.add('slider-4__dot');
        dot4.setAttribute('data-slide-to', i+1);
        slider4__dotsArea.append(dot4);
        slider4__dots.push(dot4);
        dotActive4(arrowdot4.length)
    }
}

function dotActive4(index) {
    slider4__dots.forEach(dot => {
        dot.style.transform = "scale(1)"
        dot.style.backgroundColor = "#5E7288";
        dot.style.transition = 'all 350ms ease-in-out';
    })
    slider4__dots[index].style.transform = "scale(1.3)";
    slider4__dots[index].style.backgroundColor = "#27AE60";
    slider4__dots[index].style.transition = 'all 350ms ease-in-out';
};

    slider4__dots.forEach(item => {
        item.addEventListener('click', (e) => {
            let slideTo4 = e.target.getAttribute('data-slide-to');
            offset4 = Math.round(+slider4__wrapperWidth.slice(0, slider4__wrapperWidth.length - 2)) * (slideTo4 - 2)
            arrowdot4.length = slideTo4 - 2;
            moveSlide4(offset4)
            dotActive4(arrowdot4.length)
        })
    })

    // modal

    arr.forEach((img, d) => {
        img.id = `${img.src.slice(img.src.length-5,img.src.length-4)}`
            loops[d].addEventListener('click', function() {
                let a = document.createElement('img');
                a.classList.add('img-item')
                let b = document.querySelector('.modal-slider4-item1__wrapper2');
                let c = document.querySelector('.modal-slider4-item1');
                let q = document.querySelector('.modal-slider4-item1__wrapper');
                let slider4__closemodal = document.querySelector('.close-button');
                a.src = `img/slider-4__item${img.id}.png`;
                    b.appendChild(a);
                c.style.display = "block";
                document.body.style.overflow = 'hidden'

                slider4__closemodal.addEventListener('click', function() {
                    a.remove();
                    c.style.display = 'none';
                    document.body.style.overflow = 'visible'
                })
                c.addEventListener('click', (e) => {
                    if (e.target == q) {
                        a.remove();
                        c.style.display = 'none';
                        document.body.style.overflow = 'visible'
                    }
                })
        })
    })
})




slider4__navlinks.forEach((item, i) => {
    item.addEventListener('click', function() {
        slider4__navlinks.forEach((item) => {
            if (item.classList.contains('navactive')) {
                item.classList.remove('navactive')
            }
        })
        item.classList.add('navactive');
        slider4__sliders.forEach((item) => {
            if (item.classList.contains('showslider')) {
                item.classList.remove('showslider')
            }
        slider4__sliders[i].classList.add('showslider');
        })
    })
})


//slider-5

const slider5__slides = Array.from(document.querySelectorAll('.slider-5__item')),
      slider5__field = document.querySelector('.slider-5__field'),
      slider5__wrapperWidth = window.getComputedStyle(slider5__slides[0]).width;


let offset5 = 0;
let start = 0;
let move = 0;
let end = 0;
slider5__field.style.width = `${Math.round(slider5__wrapperWidth.slice(0, slider5__wrapperWidth.length - 2)) * (slider5__slides.length)} +'px'`;

function moveSlide5(offset5) {
    slider5__field.style.transform = `translateX(-${offset5}px)`;
    slider5__field.style.transition = 'all 1s ease-in-out';
}

slider5__field.addEventListener('touchstart', (e) => {
    start = e.touches[0].clientX
    console.log(start)
})

slider5__field.addEventListener('touchmove', (e) => {
    move = e.touches[0].clientX
})

slider5__field.addEventListener('touchend', (e) => {
    end = e.touches[0].clientX
    console.log(end)
})



});


console.log(a111)