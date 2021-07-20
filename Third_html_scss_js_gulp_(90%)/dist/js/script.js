document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        if (parent.classList.contains('_active')) {
            parent.classList.remove('_active');
        } else {
            document
                .querySelectorAll('.accordion-item')
                .forEach((child) => child.classList.remove('_active'))

            parent.classList.toggle('_active');
        }
    })
)



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


const iconBurger = document.querySelector('.header-mobile__burger');
if (iconBurger){
    const menuList = document.querySelector('.header-mobile__menu-list');
    iconBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconBurger.classList.toggle('_active');
        menuList.classList.toggle('_active');
    });
}



const iconBurger2 = document.querySelector('.header-mobilef__burger');
if (iconBurger2){
    const menuList2 = document.querySelector('.header-mobilef__menu-list');
    iconBurger2.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconBurger2.classList.toggle('_active');
        menuList2.classList.toggle('_active');
    });
}


function Tabs() {
    var bindAll = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].addEventListener('click', change, false);
      }
    }
  
    var clear = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].classList.remove('active');
        var id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    }
  
    var change = function(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    }
  
    bindAll();
}
var connectTabs = new Tabs();


var swiper = new Swiper('.swiper-container',{
    autoplay: {
        delay:3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    observer: true,
    observeParents: true,
    loop: true,
});


var swiper2 = new Swiper('.swiper-container.two',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay:3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },
    observer: true,
    observeParents: true,
    autoHeight: true,
    loop: true,
    centeredSlides:true,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        1195: {
            slidesPerView: 3,
          },
    }
});


var swiper3 = new Swiper('.swiper-container',{
    autoplay: {
        delay:3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },
    observer: true,
    observeParents: true,
    autoHeight: true,
    loop: true,
    slidesPerView: 1.5,
    centeredSlides:true,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        458: {
            slidesPerView: 1.5,
          },
    }
});






