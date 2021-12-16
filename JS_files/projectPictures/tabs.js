function tabs() {
        // Tabs

    const tabMenu = document.querySelector('.portfolio-menu');
    const tabs = tabMenu.querySelectorAll('li');
    const tabItems = document.querySelectorAll('.portfolio-block');

    tabMenu.addEventListener('click', (e) => {

        activateTab('girl', e)
        activateTab('lovers', e)
        activateTab('chef', e)
        activateTab('guy', e)
        activateTab('grandmother', e)
        activateTab('granddad', e)
        activateTab('all', e)

    })
    function activateTab(className, e) {

        if (e.target.classList.contains(className)) {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            e.target.classList.add('active')
            tabItems.forEach(item => {
                if (item.classList.contains(className)) {
                    item.classList.add('animated','fadeIn')
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            })
        } else if (e.target.classList.contains('granddad') || e.target.classList.contains('grandmother')) {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            e.target.classList.add('active')
            tabItems.forEach(item => {
                item.style.display = 'none';
            })
            document.querySelector('.portfolio-no').style.display = 'block'
        }

    }
}

export default tabs;