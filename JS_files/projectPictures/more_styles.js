function moreStyles() {
        // More styles 

    const buttonStyles = document.querySelector('.button-styles');
    const styles = document.querySelectorAll('.hidden-lg');
    styles.forEach(item => {
        item.classList.add('animated', 'fadeInUp')
    })

    buttonStyles.addEventListener('click', () => {
        styles.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2')
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
        })
        buttonStyles.style.display = 'none'
    })
}

export default moreStyles;