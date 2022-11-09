const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.body;

burger.addEventListener('click', function () {
    burger.classList.toggle('_active')
    menu.classList.toggle('_active')
    body.classList.toggle('_lock')
})
menu.addEventListener('click', function () {
    burger.classList.remove('_active')
    menu.classList.remove('_active')
    body.classList.remove('_lock')

})