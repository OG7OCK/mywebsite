
function bigPictures() {
    // Big pictures

    const work = document.querySelector('.works');
    const workPictures = work.querySelectorAll('img');

    workPictures.forEach(pic => {

        pic.addEventListener('click', (e) => {
            e.preventDefault();

            const bigPickBackground = document.createElement('div');

            bigPickBackground.classList.add('big_picture_background');
            bigPickBackground.style.alignItems = 'center';
            bigPickBackground.style.display = 'none';
            bigPickBackground.style.justifyContent = 'center';
            bigPickBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            bigPickBackground.style.width = '100%';
            bigPickBackground.style.height = '100%';
            bigPickBackground.style.margin = '0 auto';
            bigPickBackground.style.position = 'fixed';
            bigPickBackground.style.zIndex = '100';
            bigPickBackground.style.top = '0';
    
            document.body.appendChild(bigPickBackground);
    
            const bigPick = document.querySelector('img');
    
            bigPick.classList.add('big_picture');
            bigPick.src = `${pic.parentNode.href}`
            bigPick.style.width = '50%';
            bigPick.style.height = '50%';
            bigPick.style.opacity = '1';
            bigPick.style.position = 'absolute';
            
            
            bigPickBackground.append(bigPick)
            bigPickBackground.style.display = 'flex';
            document.body.style.marginRight = `${scroll()}px`;
            document.body.style.overflow = 'hidden';

            bigPickBackground.addEventListener('click', (e) => {
                if (e.target == bigPickBackground) {
                    bigPickBackground.style.display = 'none';
                    document.body.style.overflow = 'visible';
                    document.body.style.marginRight = `0px`;
                }
            })
        })



    })
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
}

export default bigPictures;