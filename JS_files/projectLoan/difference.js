export default class Difference {
    constructor({container = null, items = null} = {}) {
        this.container = document.querySelector(container);
        try {
            this.items = this.container.querySelectorAll(items);
        } catch (error) {}
        this.index = 0;
    }

    init() {
        try {
            this.items.forEach(item => {
                if (item.lastElementChild.classList.contains('card__click')) {
                    item.lastElementChild.addEventListener('click', () => {
                        this.addCard(1)
                    })
                } else {
                    item.classList.add('animated', 'fadeIn')
                    item.style.display = 'none';
                }
            })
        } catch (error) {}


    }

    addCard(n) {
        this.index+=n
        if (this.index > this.items.length-2) {
            this.items[this.index-1].style.display = 'flex';
            this.items.forEach(item => {
                if (item.lastElementChild.classList.contains('card__click')) {
                    item.classList.add('animated', 'fadeOutDown')
                    setTimeout(function() {
                        item.style.display = 'none';
                    }, 3000)
                }
            })
        } else {
            this.items[this.index-1].style.display = 'flex';
        }

    }
}