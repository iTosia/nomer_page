// scroll-button

const btnScrollToTop = document.querySelector('.footer__link');

btnScrollToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
