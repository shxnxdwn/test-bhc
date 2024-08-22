const openModalButton = document.querySelector('.button-show');
const modalWrapper = document.querySelector('.modal-wrapper');


const showModal = () => {
    document.body.classList.add('modal-open');
    modalWrapper.classList.remove('visually-hidden');
    openModalButton.classList.add('visually-hidden');

    setTimeout(() => {
        openModalButton.removeEventListener('click', showModal);
        document.body.addEventListener('click', closeModal);
    }, 0);
};


const closeModal = (event) => {
    if (event.target.classList.contains('form__close-button') || !event.target.closest('.modal')) {
        document.body.classList.remove('modal-open');
        openModalButton.classList.remove('visually-hidden');
        modalWrapper.classList.add('visually-hidden');

        setTimeout(() => {
            document.body.removeEventListener('click', closeModal);
            openModalButton.addEventListener('click', showModal);
        }, 0);
    }
};


openModalButton.addEventListener('click', showModal);
