function tabs() {

    // Tabs

    const mainBlock = document.querySelector('.glazing');
    const slider = mainBlock.querySelector('.glazing_slider');
    const sliderLinks = slider.querySelectorAll('a');
    const sliderBlocks = mainBlock.querySelectorAll('.glazing_block');
    const tabs = mainBlock.querySelectorAll('.row');
    const main = document.querySelector('.main');

    slider.style.display = 'flex';
    slider.style.width = '100%';
    slider.style.justifyContent = 'space-between';
    slider.style.flexWrap = 'wrap';
    main.querySelectorAll('img').forEach(item => {
        item.style.display = 'flex'
    })

    startTab()
    initTabs()

    function startTab() {

        tabs.forEach((item) => {
            item.style.display = 'none'
        })
        tabs[0].style.display = 'block'
        tabs[0].classList.add('active');
    }


    function initTabs() {

        sliderBlocks.forEach((item, i ) => {

            item.addEventListener('click', () => {
                const link = item.querySelector('a')
                const tab = tabs[i]
        
                sliderBlocks.forEach(item => {
                    const link = item.querySelector('a')
                    if (link.classList.contains('active')) {
                        link.classList.remove('active')
                    }
                })
        
                tabs.forEach(point => {
                    if (point.classList.contains('active')) {
                        point.classList.remove('active');
                        point.style.display = 'none';
                    }
                })
        
                tab.classList.add('active');
                tab.style.display = 'block';
                link.classList.add('active');
            })
        })

}

// Tabs decoration

    const decorationSlider = document.querySelector('.decoration')
    const decorationSliderItems = decorationSlider.querySelectorAll('.decoration_item');
    const decorationContent = decorationSlider.querySelector('.decoration_content');
    const decorationContentRow = decorationContent.querySelector('.row');


    decorationSliderItems.forEach(item => {
        const child = item.firstElementChild
        item.addEventListener('click', () => {
            decorationSliderItems.forEach(it => {
                if (it.firstElementChild.classList.contains('after_click')) {
                    it.firstElementChild.classList.remove('after_click')
                }
            })
            child.classList.add('after_click')
            Array.from(decorationContentRow.children).forEach((block) => {
                if (block.classList.contains(child.id)) {
                    block.style.display = 'block'
                } else {
                    block.style.display = 'none'
                }
            })
        })
    })

}

export default tabs;