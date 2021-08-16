"use strict"

window.addEventListener('DOMContentLoaded', () => {

const tabsBlock = document.querySelector('.tabheader__items');
const tabs = tabsBlock.querySelectorAll('.tabheader__item');
const tabsContentBlock = document.querySelector('.tabcontainer');
const tabContent = tabsContentBlock.querySelectorAll('.tabcontent');

tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
        tabs.forEach((suf) => {
            if (suf.classList.contains('tabheader__item_active')) {
                suf.classList.remove('tabheader__item_active');
            }
        })
        item.classList.add('tabheader__item_active');
        tabContent.forEach((tabcont) => {
            if (tabcont.classList.contains('_active')) {
                tabcont.classList.remove('_active');
                }
        })
        tabContent[i].classList.add('_active');
    });
});

// Timer

const deadline = '2021-09-1';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000*60*60*24)),
          hours = Math.floor((t / 1000*60*60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setZero (value) {
    if (value >= 0 && value < 10) {
        return `0${value}`;
    } else {
        return value;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector('.timer'),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = setZero(t.days);
        hours.innerHTML = setZero(t.hours);
        minutes.innerHTML = setZero(t.minutes);
        seconds.innerHTML = setZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        };
    };
};

setClock('.timer',deadline);

// Modal

const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', openModal);

function closeModal () {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

function openModal () {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
} 

modalCloseBtn.addEventListener('click', closeModal);


modal.addEventListener('click',(e) => {
    if (e.target === modal) {
        closeModal();
    };
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
})

const modalTimer = setTimeout(openModal, 3000);

});







