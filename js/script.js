// modal-window

const btnOrder_1 = document.querySelector('.header__button');
const btnOrder_2 = document.querySelector('.btn-order-1');
const btnOrder_3 = document.querySelector('.btn-order-2');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__button-close');

const btnToOrder = document.querySelector('.modal__button-order');
const contactForm = document.querySelector('.modal__form');
const thanks = document.querySelector('.modal__thanks');

btnOrder_1.addEventListener('click', toggleModal);
btnOrder_2.addEventListener('click', toggleModal);
btnOrder_3.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

btnToOrder.addEventListener('click', Thanks);

function toggleModal(){
    modal.classList.toggle('is-open');
}

function Thanks(){
    modal.classList.add('is-open');
    contactForm.classList.add('is-closed');
    thanks.classList.add('is-ok');
}


async function onSubmit(event){
    const request = {
        name: event.target[0].value,
        firstPhone: event.target[1].value,
        secondPhone: event.target[2].value
    };

    contactForm.classList.add('is-closed');
    thanks.classList.add('is-ok');

    // immitation of fetch
    return await setTimeout((request)=> {
        modal.classList.remove('is-open');
        modal.classList.toggle('is-closed');
    },3000);

}