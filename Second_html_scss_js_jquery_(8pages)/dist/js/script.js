


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

/*Dropdown Menu*/
const iconSelect = document.querySelector('.container');
if (iconSelect){
    const dropdownMenu = document.querySelector('.dropdown-menu');
    iconSelect.addEventListener("click", function(e) {
        iconSelect.classList.toggle('_active');
        dropdownMenu.classList.toggle('_active');
    });
}

/*Dropdown Menu*/
const iconSelect2 = document.querySelector('.container2');
if (iconSelect){
    const dropdownMenu2 = document.querySelector('.dropdown-menu2');
    iconSelect2.addEventListener("click", function(e) {
        iconSelect2.classList.toggle('_active');
        dropdownMenu2.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

$('.dropdown .dropdown-menu2 li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Dropdown Menu*/
const iconSelect3 = document.querySelector('.container3');
if (iconSelect){
    const dropdownMenu3 = document.querySelector('.dropdown-menu3');
    iconSelect3.addEventListener("click", function(e) {
        iconSelect3.classList.toggle('_active');
        dropdownMenu3.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu3 li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Dropdown Menu*/
const iconSelect4 = document.querySelector('.container4');
if (iconSelect){
    const dropdownMenu4 = document.querySelector('.dropdown-menu4');
    iconSelect4.addEventListener("click", function(e) {
        iconSelect4.classList.toggle('_active');
        dropdownMenu4.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu4 li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/






/*Dropdown Menu*/
const iconSelect_m= document.querySelector('.container-m');
if (iconSelect_m){
    const dropdownMenu_m = document.querySelector('.dropdown-menu-m');
    iconSelect_m.addEventListener("click", function(e) {
        iconSelect_m.classList.toggle('_active');
        dropdownMenu_m.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu-m li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Dropdown Menu*/
const iconSelect2_m = document.querySelector('.container2-m');
if (iconSelect2_m){
    const dropdownMenu2_m = document.querySelector('.dropdown-menu2-m');
    iconSelect2_m.addEventListener("click", function(e) {
        iconSelect2_m.classList.toggle('_active');
        dropdownMenu2_m.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu2-m li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Dropdown Menu*/
const iconSelect3_m = document.querySelector('.container3-m');
if (iconSelect3_m){
    const dropdownMenu3_m = document.querySelector('.dropdown-menu3-m');
    iconSelect3_m.addEventListener("click", function(e) {
        iconSelect3_m.classList.toggle('_active');
        dropdownMenu3_m.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu3-m li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Dropdown Menu*/
const iconSelect4_m = document.querySelector('.container4-m');
if (iconSelect4_m){
    const dropdownMenu4_m = document.querySelector('.dropdown-menu4-m');
    iconSelect4_m.addEventListener("click", function(e) {
        iconSelect4_m.classList.toggle('_active');
        dropdownMenu4_m.classList.toggle('_active');
    });
}

$('.dropdown .dropdown-menu4-m li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/