export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = document.querySelector('.close');
        this.flag = true;
    }

    bindTriggers() {
        
        this.btns.forEach(btn => {
            if (btn.firstElementChild.classList.contains('closed')) {

            } else {
                btn.addEventListener('click', ()=> {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path)
                    if (btn.parentElement.classList.contains('module__video-item')) {
                        const temp = btn.firstElementChild.cloneNode(true)
                        btn.parentElement.nextElementSibling.lastElementChild.firstElementChild.remove()
                        btn.parentElement.nextElementSibling.lastElementChild.insertBefore(temp, btn.parentElement.nextElementSibling.lastElementChild.children[0])
                        btn.parentElement.nextElementSibling.style.filter = 'none';
                        btn.parentElement.nextElementSibling.style.opacity = '1';
                        btn.parentElement.nextElementSibling.lastElementChild.addEventListener('click', () => {
                            const path = btn.parentElement.nextElementSibling.lastElementChild.getAttribute('data-url');
                            this.createPlayer(path)
                        })
                    }
                })
            }
        })
    }



    bindCloseBtn() {
        this.overlay.addEventListener('click', (e) => {
            if (e.target == this.close || e.target == this.overlay) {
                this.overlay.style.display = 'none';
                this.player.stopVideo();
                document.querySelector('iframe#frame').remove();
                const frame = document.createElement('div');
                frame.id = 'frame';
                this.overlay.firstElementChild.insertBefore(frame, this.overlay.firstElementChild.children[0])
            }
        })
    }

    createPlayer(url) {
        
        this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: `${url}`
        });
        
        this.overlay.style.display = 'flex';
    }


    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers()
        this.bindCloseBtn()
    }
}