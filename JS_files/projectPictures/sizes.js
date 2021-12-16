function sizes() {
        // Sizes

    const sizesBlocks = document.querySelectorAll('.sizes-block');

    sizesBlocks.forEach(item => {

        const text = item.querySelectorAll('p');

        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            text.forEach(p => {
                if (p.classList.contains('sizes-hit')) {

                } else {
                    p.style.display = 'none'
                }
            })
            img.classList.add('animated', 'fadeIn')
            img.src = img.src.slice(0, img.src.length-4) + '-1.png';
            console.log(img.src)
        })
        item.addEventListener('mouseleave', () => {
            const img = item.querySelector('img');
            text.forEach(p => {
                if (p.classList.contains('sizes-hit')) {

                } else {
                    p.style.display = 'block'
                }
            })
            img.classList.remove('fadeIn')
            img.src = img.src.split('.')[0].slice(0, img.src.split('.')[0].length-2) + '.' + img.src.split('.')[1]

        })
    })
}

export default sizes;