function burger() {
        // Burger

    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerMenu.style.display = 'none';

    burger.addEventListener('click', (e) => {

        if (e.currentTarget == burger && burgerMenu.style.display == 'none' && window.screen.availWidth < 993) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
        }

    })

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            burgerMenu.style.display = 'none';
        }
    })
}

export default burger;