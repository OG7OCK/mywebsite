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
          counter = document.querySelectorAll('.arrows__number');

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
      slider2__wrapper = document.querySelector('.slider-2__wrapper'),
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

    slider2__field.style.transform = `translateX(-${offset}px)`;
    slider2__field.style.transition = 'all 350ms ease-in-out';
});

slider2__prev.addEventListener('click', () => {
    
    if (offset == 0) {
        offset = Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2)) * (slider2__slides.length -3);
    } else  {
        offset -= Math.round(+slider2__wrapperWidth.slice(0, slider2__wrapperWidth.length - 2))
    }
    
    slider2__field.style.transform = `translateX(-${offset}px)`;
    slider2__field.style.transition = 'all 350ms ease-in-out';
});


