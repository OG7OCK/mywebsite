function tabs() {

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
}

export default tabs;