export default class Accordeon {
    constructor({triggers = null}) {
        this.triggers = document.querySelectorAll(triggers);
    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                trigger.parentElement.nextElementSibling.classList.toggle('show');
                if (trigger.parentElement.nextElementSibling.classList.contains('show')) {
                    trigger.parentElement.nextElementSibling.style.display = 'block';
                } else {
                    trigger.parentElement.nextElementSibling.style.display = 'none';
                }
            })
        })
    }
}