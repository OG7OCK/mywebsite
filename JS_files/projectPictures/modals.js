function modals() {
        // modals

    const popupDesignButtons = document.querySelectorAll('.button-design');
    const popupConsultationButtons = document.querySelectorAll('.button-consultation');
    const popupGiftButton = document.querySelector('.fixed-gift');
    const popupDesign = document.querySelector('.popup-design');
    const popupGift = document.querySelector('.popup-gift');
    const popupGiftClose = popupGift.querySelector('.popup-close');
    const popupDesignClose = popupDesign.querySelector('.popup-close');
    const popupConsultation = document.querySelector('.popup-consultation');
    const popupConsultationClose = popupConsultation.querySelector('.popup-close');
    let buttonPressed = false

    popupDesignButtons.forEach(item => {
        openPopup(item, popupDesign, popupDesignClose)
    })
    popupConsultationButtons.forEach(item => {
        openPopup(item, popupConsultation, popupConsultationClose)
    })

    openGift(popupGiftButton, popupGift, popupGiftClose)

    popupDesign.classList.add('animated','fadeIn')
    popupGift.classList.add('animated','fadeIn')
    popupConsultation.classList.add('animated','fadeIn')
    popupGiftButton.classList.add('animated')

    function openGift(openButton, popupBlock, closeButton) {

        openButton.addEventListener('click', (e) => {
            e.preventDefault()
            
            popupBlock.style.display = 'block'
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll()}px`;
            openButton.remove()
            buttonPressed = true
        })


        popupBlock.addEventListener('click', (e) => {
            if (e.target == popupBlock) {
                popupBlock.style.display = "none";
                const input = document.querySelectorAll('input');
                input.forEach(item => {
                    item.value = '';
                })
            }
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })

        closeButton.addEventListener('click', () => {
            popupBlock.style.display = "none";
            const input = popupBlock.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            })
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })
    }




    function scroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();

        return scrollWidth
    }


    function openPopup(openButton, popupBlock, closeButton) {

        openButton.addEventListener('click', (e) => {
            e.preventDefault()
            
            popupBlock.style.display = 'block'
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll()}px`;
            buttonPressed = true
        })


        popupBlock.addEventListener('click', (e) => {
            if (e.target == popupBlock) {
                popupBlock.style.display = "none";
                const input = document.querySelectorAll('input');
                input.forEach(item => {
                    item.value = '';
                })
            }
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })

        closeButton.addEventListener('click', () => {
            popupBlock.style.display = "none";
            const input = popupBlock.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            })
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })
    }
    function openByScroll() {
        window.addEventListener('scroll', () => {
            if (!buttonPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                popupGiftButton.click()
            }
        })
    }
    openByScroll()
}

export default modals;