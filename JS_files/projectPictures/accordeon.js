function accordeon() {
        // Accordeon

    const accordion = document.getElementById('accordion');
    const accordionTrigger = accordion.querySelectorAll('span');
    const accordionBlock = accordion.querySelectorAll('.accordion-block');

    accordionBlock.forEach((item,i) => {
        item.classList.add('animated', 'fadeIn')
        item.style.display = 'none';
    })

    accordionTrigger.forEach((item, i) => {
        item.classList.add('trigger')
        item.id = `${i}`
    })

    accordion.addEventListener('click', (e) => {

        if (e.target.classList.contains('trigger')) {
            e.target.classList.toggle('ui-accordion-header-active');
        }

        if (e.target.classList.contains('ui-accordion-header-active')) {
            accordionBlock[e.target.id].style.display = 'block';
        } else {
            accordionBlock[e.target.id].style.display = 'none';
        }

    })
}

export default accordeon;