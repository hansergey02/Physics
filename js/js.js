const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Скорость скролла в миллисекундах
    offset: 0, // Отступ сверху
    easing: 'easeInOutCubic' // Анимация скролла
});