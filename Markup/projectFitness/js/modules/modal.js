function modal() {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(item => {
            item.addEventListener('click', openModal);
        })

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    } 

    modalCloseBtn.addEventListener('click', closeModal);


    modal.addEventListener('click',(e) => {
        if (e.target === modal) {
        closeModal();
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
    })

    const modalTimer = setTimeout(openModal, 3000);
}






export default modal;